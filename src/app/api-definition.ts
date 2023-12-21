
export interface ApiDefinition {
    id: number;
    name: string;
    apiName: string;
    fieldname: string;
    type: string;
    value: string;
}

// -------------------------------------------------------- //
// Necessary Interfaces for playground                      //
// -------------------------------------------------------- //
export interface Headers{ 
    [key: string]: any;
  }

export interface Body{ 
    [key: string]: any;
  }

// -------------------------------------------------------- //
// Necessary Functions for playground                       //
// -------------------------------------------------------- //
export const apiDefinition: ApiDefinition[] =[
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname: 'my/url',
        type: 'url',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname: 'x-api-key',
        type: 'header',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : '"WorkplaceId"',
        type: 'body',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Requesting User Email',
        type: 'body',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Upload Excel',
        type: 'excel',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'POST',
        type: 'method',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Sections',
        type: 'body-params-parent',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Fields',
        type: 'body-params-child',
        value:'',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Options',
        type: 'field-params',
        value:'',
    },
    // createAppExcel //
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname: 'https://api-public-v3.clappia.com/appdefinitionv2/createApp',
        type: 'url',
        value:'',
    },
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname : 'POST',
        type: 'method',
        value:'',
    },
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname: 'x-api-key',
        type: 'header',
        value:'',
    },
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname : 'workplaceId',
        type: 'header',
        value:'',
    },
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname : 'requestingUserEmailAddress',
        type: 'body',
        value:'',
    },
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname : 'appName',
        type: 'body',
        value:'',
    },
    {
        id:2,
        name: 'Clappia',
        apiName:'createAppExcel',
        fieldname : 'sections',
        type: 'excel',
        value:'',
    },
     
]