import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDefinition,Headers,Body } from '../api-definition';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-service.service';
import { ExcelOperationsService } from '../excel-operations.service';
import { HttpClientModule } from '@angular/common/http';
import * as XLSX from 'xlsx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Form, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger } from '@angular/animations';



@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
],
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})



export class PlaygroundComponent{

  // -------------------------------------------------------- //
  // Variables                                                //
  // -------------------------------------------------------- //
  
  route: ActivatedRoute = inject(ActivatedRoute);
  apiService: ApiService = inject(ApiService);
  excelOperations: ExcelOperationsService = inject(ExcelOperationsService);
  apiDefinition: ApiDefinition[] = [];
  xheaders: Headers = {};
  xbody: Body = {};
  

  AppName: string = '';
  AppApi: string = '' ;

  apiUrl: ApiDefinition | undefined;
  apiHeader: ApiDefinition[] = [];
  apiBody: ApiDefinition[] = [];
  apiBodyParams: ApiDefinition | undefined;
  apiMethod: ApiDefinition | undefined;
  apiExcel: ApiDefinition | undefined ;
  

  // -------------------------------------------------------- //
  // This Constructor initiates every time the                //
  // route changes which helps update the playground items.   //
  // To achieve this the activated router uses "subscribe" to //
  // listen to the changes in the route.                      //
  // Will have to check if a similar result can be achieved   //
  // using ngOnInit? (Is it possbile?)                        //
  // https://angular.io/api/router/RouterEvent                //
  // -------------------------------------------------------- //
  // https://stackoverflow.com/questions/33520043/how-to-detect-a-route-change-in-angular //


  constructor(route: ActivatedRoute, private http: HttpClient){

    route.params.subscribe(val => {

      this.AppName = this.route.snapshot.params['name'];
      this.AppApi = this.route.snapshot.params['apiName'];

      this.apiDefinition = this.apiService.getApiDefinition(this.AppName,this.AppApi);

      this.apiUrl = this.apiDefinition.find(apiDefinition => apiDefinition.type === 'url');

      this.apiMethod = this.apiDefinition.find(apiDefinition => apiDefinition.type === 'method');

      this.apiHeader = this.apiDefinition.filter(apiDefinition => apiDefinition.type === 'header');

      this.apiBody = this.apiDefinition.filter(apiDefinition => apiDefinition.type === 'body');

      this.apiBodyParams = this.apiDefinition.find(apiDefinition => apiDefinition.type === 'body-params-parent');

      this.apiExcel = this.apiDefinition.find(apiDefinition => apiDefinition.type === 'excel');

      console.log('apiheader',this.apiHeader)

    })
  }

  // -------------------------------------------------------- //
  // For working with excel                                   //
  // Syntax to get fiel name: evt.target.files[0].name        //
  // -------------------------------------------------------- //
  // https://stackblitz.com/edit/angular-excel-read-table     //

 
  data: any[][] = [];
  x_payload: {} = {};
  fileName:string | undefined;
  headerValues: {} = {};


  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
 
    this.fileName = evt.target.files[0].name;
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      
      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1,  defval: '' }));
      this.data.shift()
      this.x_payload = this.excelOperations.createAppClappia(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  // -------------------------------------------------------- //
  // Implementing adding input body fields                    //
  // Dynamic form creation                                    //
  // Using the final json output in the API body              //
  // https://stackblitz.com/edit/angular-ivy-jntmzf           //
  // -------------------------------------------------------- //
  // Important refernces                                      //
  // https://stackoverflow.com/questions/68856571/how-to-add-input-fields-using-a-add-button-in-angular  //
  // *https://dev.to/julianobrasil/writing-nested-recursive-angular-reactive-forms-a-clean-approach-57fk //
  // *https://stackblitz.com/edit/httpsdevtojulianobrasilwriting-nested-recursive-angular-reactiv?file=src%2Fapp%2Fgroup-control%2Fgroup-control.component.ts //




  // -------------------------------------------------------- //
  // SENDING THE API REQUEST                                  //
  // For getting values in input created in a *ngFor          //
  // And for two way binding[1]                               //
  // -------------------------------------------------------- //
  // https://plnkr.co/edit/ashLynsRblWWl7Adb4Wg?p=preview&preview //
  // https://stackoverflow.com/questions/40314732/angular-2-2-way-binding-with-ngmodel-in-ngfor //
  // https://stackoverflow.com/questions/70448290/how-to-take-value-from-input-which-is-in-ngfor-loop //
  // https://stackoverflow.com/questions/57497029/binding-to-an-array-of-objects-inside-an-ngfor-binds-all-inputs-together //
  // https://stackblitz.com/edit/angular-rvfys6?file=src%2Fapp%2Fapp.component.ts //
  // https://stackoverflow.com/questions/60703765/data-binding-in-html-input-in-ngfor-in-angular-8 //
  // https://stackblitz.com/edit/angular-zmscxv?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts //
  
  sendApiRequest() {
    
    
    this.xheaders['Content-Type'] = 'application/json',
    this.apiHeader.forEach(header => {
      this.xheaders[header.fieldname] = header.value;
    });
    
    this.apiBody.forEach(body => {
      this.xbody[body.fieldname] = body.value;
    });


    if (this.apiExcel?.fieldname !== ""){
      this.xbody[this.apiExcel?.fieldname!] = this.x_payload;
    }

    let response = this.apiService.trigger(this.apiUrl?.fieldname!, this.xbody, this.xheaders);
    console.log('The url is',this.apiUrl?.fieldname!)
    console.log('The header is',this.xheaders);
    console.log('The body is',this.xbody);
    console.log('The response is',response)
  }
  // -------------------------------------------------------- //
  // Creating key value pair : indexsignature  [above]        //
  // -------------------------------------------------------- //
  // https://stackoverflow.com/questions/36467469/is-key-value-pair-available-in-typescript //
  // https://stackoverflow.com/questions/43726218/how-to-loop-through-a-json-object-with-typescript-angular2//

}