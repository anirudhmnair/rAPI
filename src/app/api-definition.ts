
export interface ApiDefinition {
    id: number;
    name: string;
    apiName: string;
    fieldname: string;
    type:string;
}

export const apiDefinition: ApiDefinition[] =[
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname: 'x-api-key',
        type: 'header',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Workplace Id',
        type: 'body',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Requesting User Email',
        type: 'body',
    },
    {
        id:1,
        name: 'Clappia',
        apiName:'createApp',
        fieldname : 'Upload Excel',
        type: 'excel',
    },

]