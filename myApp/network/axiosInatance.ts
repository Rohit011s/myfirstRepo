import axios, { AxiosInstance } from "axios";
const axoisInstance:AxiosInstance = axios.create({
    baseURL:"",
    timeout:5000,
    headers:{
        "Content-Type": "application/json"
    }
});
axoisInstance.interceptors.request.use(
    (config)=>{
        config.headers.Authorization="Bearer tokken";
        return config;
    },
    (error)=>{
     
    const errorStatus = error.response.status;
    if (errorStatus === 401) {
        console.log('Unauthorized');
    } else if (errorStatus === 403) {
        console.log('Forbidden');
    } else if (errorStatus === 404) {
        console.log('Not Found');
    } else if (errorStatus === 500) {
        console.log('Internal Server Error');
    } else {
        console.log('Unknown Error');
    }
}

);
