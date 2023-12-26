import { Injectable } from '@angular/core';
import { ApiDefinition, apiDefinition } from './api-definition';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Items } from './excel-templates';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // bootstrapapplicaitons https imports will be configured   //
  // in the app.config.ts in standalone projects              // 

  constructor(private http: HttpClient) {}

  response: any = [];

  apiDefinition: ApiDefinition[] = apiDefinition
  apiUrl: ApiDefinition | undefined

  getApiDefinition(name: string, apiName: string){
    return this.apiDefinition.filter(apiDefinition => apiDefinition.name === name && apiDefinition.apiName === apiName)
  }

  getApiUrl(){
    return this.apiDefinition
  }

  createSomething(runnerType: string | undefined, bodyParam: string ,url: string, body: any, payload: any, header: {}){

    
    if(runnerType == "singleRequest"){
      this.response = this.trigger(url, body, header);
      return this.response;
    }

    if(runnerType == "multiRequest"){
      payload.forEach(( row: any)=>{
        // let x_body: Items = {}
        body[bodyParam] = row;
        console.log('api_service ----data------',body)
        this.trigger(url, body, header);
        return this.response;
      });
    }
    return this.response;
  }


  // --------------------------------------------------//
  // Using Angular HTTP                                //
  // ------------------------------------------------- //
  // https://angular.io/guide/http-send-data-to-server //
  
  trigger(url: string, body: any, header: {}){
    const httpOptions = {
      headers:  new HttpHeaders(header)
    };

    let response = this.http
      .post<any>(url, body,httpOptions)
      .subscribe(data => {
        console.log(data);
      });
      return response;
    }
  // ---------------------------------------- //
  // Using fetch                              //
  // ---------------------------------------- //

  // trigger(url: string, body: any, header: {}){
  //   fetch(url, {
  //     method: 'post',
  //     headers: header,
  //     body: body,
  //   })
  // }

}
