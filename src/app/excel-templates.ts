export interface Field {
    fieldType: string;
    label: string;
    options?: string[];
  }
  
  export interface Section {
    sectionName: string;
    fields: Field[];
  }