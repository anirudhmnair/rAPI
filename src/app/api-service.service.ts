import { Injectable } from '@angular/core';
import { ApiDefinition, apiDefinition } from './api-definition';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // bootstrapapplicaitons https imports will be configured   //
  // in the app.config.ts in standalone projects              // 

  constructor(private http: HttpClient) {}

  apiDefinition: ApiDefinition[] = apiDefinition
  apiUrl: ApiDefinition | undefined

  getApiDefinition(name: string, apiName: string){
    return this.apiDefinition.filter(apiDefinition => apiDefinition.name === name && apiDefinition.apiName === apiName)
  }

  getApiUrl(){
    return this.apiDefinition
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
