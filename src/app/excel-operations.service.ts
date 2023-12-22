import { Injectable } from '@angular/core';
import { Field, Section, Items } from './excel-templates';

@Injectable({
  providedIn: 'root'
})

export class ExcelOperationsService {

  payload: any;
  parseExcel(data:any[][], apiName:string){
    if(apiName == 'Clappia'){
     this.payload = this.parseExcelClappia(data);
    };

    if(apiName == 'Webflow'){
     this.payload =  this.parseExcelWebflow(data);
    };
    return this.payload;
  }

  parseExcelClappia(data:any[][]) {
    
    const sections = Array.from(new Set(data.map((row: any) => row[0])));
    const sectionPayload: Section[] = [];

    sections.forEach((sectionName) => {
      const fields: Field[] = [];
      data.forEach((row: any) => {
        if (row[0] === sectionName) {
          let field: Field;
          if (row[2] === 'singleSelector' || row[2] === 'multiSelector') {
            const options = row[3].split(',');
            field = {
              fieldType: row[2],
              label: row[1],
              options,
            };
          } else {
            field = {
              fieldType: row[2],
              label: row[1],
            };
          }
          fields.push(field);
        }
      });
  
      const section: Section = {
        sectionName,
        fields,
      };
      sectionPayload.push(section);
    });
    return sectionPayload;
  }

  parseExcelWebflow(data:any[][]){
    const collections = Array.from(new Set(data.map((row: any) => row[0])));
    const collectiionPayload: any = [];

    collections.forEach((collectionName) =>{
      const fields: Items = {};
      data.forEach((row: any) => {
        if(row[0] === collectionName) {
        fields[row[1]] = row[2];
        };
      });
      console.log(fields)
      collectiionPayload.push(fields)
    });
    return collectiionPayload;
  }
}
