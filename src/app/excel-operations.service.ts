import { Injectable } from '@angular/core';
import { Field, Section } from './excel-templates';

@Injectable({
  providedIn: 'root'
})

export class ExcelOperationsService {

  createAppClappia(data:any[][]) {
    
  
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
}
