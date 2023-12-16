export interface RapiApps {
    id: number;
    name: string;
    image: string;
}

export interface ApplicationApiList {
    id: Number;
    name: string;
    apiName: string;
    url: string;

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
        apiName: 'createApp',
        url: 'createApp'
    },
    {
        id: 2,
        name: 'Webflow',
        apiName: 'createCMSItems',
        url: 'createCMSItems'
    }
]