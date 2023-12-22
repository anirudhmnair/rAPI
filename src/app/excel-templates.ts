// ------------------------------ //
// Clappia                        //
// ------------------------------ //
export interface Section {
  sectionName: string;
  fields: Field[];
}

export interface Field {
    fieldType: string;
    label: string;
    options?: string[];
  }

// ------------------------------ //
// Webotive                       //
// ------------------------------ //
export interface Items{ 
  [key: string]: any;
}