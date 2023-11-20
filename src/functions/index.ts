import { env } from "../env";
import axios from 'axios';

export const appendPrefix = (routeName: string) => {
    const prefix = env.prefix;
    const versionApi = env.versionApi;
    return `/${prefix}${versionApi}/${routeName}`;
}

export const getOsEnv = (key: string) => {
    if (typeof process.env[key] === 'undefined') {
        throw new Error(`Environment variable ${key} is not set.`);
    }

    return process.env[key];
};

export const getTenantAccessToken = async (): Promise<string> => {
    const larkAppId = env.larkAppId;
    const larkAppSecret = env.larkAppSecret;
    const res = await axios({
        method: 'POST',
        url: `https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal/`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "app_id": larkAppId,
            "app_secret": larkAppSecret
        }
    })
    return res.data.tenant_access_token
}

export const generateUUID = () => { // Public Domain/MIT
    let d = new Date().getTime();//Timestamp
    let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}