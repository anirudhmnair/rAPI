import { Injectable } from '@angular/core';
import { ApiDefinition, apiDefinition } from './api-definition';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiDefinition: ApiDefinition[] = apiDefinition

  getApiDefinition(name: string, apiName: string){
    return this.apiDefinition.filter(apiDefinition => apiDefinition.name === name && apiDefinition.apiName === apiName)
  }

  getApiList(){
    return this.apiDefinition
  }
}
