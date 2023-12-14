export interface RapiApps {
    id: number;
    name: string;
    image: string;
}

export interface ApplicationApiList {
    id: Number;
    name: string;
    apiName: string;

}

export interface ApplicatonApiConfig {
    id: number;
    name: string;
    apiName: string;
    fieldname: string;
    type:string;
}

export const applicationList: RapiApps[] =[
    {
        id:1,
        name: 'Clappia',
        image:'./assets/clappia.png',
    },
    {
        id:2,
        name: 'Webflow',
        image:'./assets/webflow.png',
    }
]

export const applicationApiList: ApplicationApiList[] =[
    {
    id: 1,
    name: 'Clappia',
    apiName: 'Create App',
    },
    {
        id: 1,
        name: 'Clappia',
        apiName: 'Help for Clappia',
    }
]

export const applicationsApiConfig: ApplicatonApiConfig[] =[
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
        fieldname : 'Requesting User Email',
        type: 'excel',
    },

]