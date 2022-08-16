import axios from "axios";


export const BaseUrl = "localhost:8000/api/v1/";

//set base url for every req
axios.defaults.baseURL = BaseUrl;

axios.interceptors.request.use(
    (config:any) => {
        // this func execute on every request we send
        if (!config.headers.Authorization) {
            config.headers.Authorization = `${window.localStorage.getItem("token")}`;
        }
        return config;
    },
    (error:any) => {
        console.log(error);
        // or use the toast module
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response:any) {
        // this func execute on every response we get
        if (response.data.token) {
            //for example if they send a token from back again change the token
            window.localStorage.setItem("token", response.header.token);
        }
        return response;
    },
    function (error:any) {
        // Do something with response error
        return Promise.reject(error);
    }
);

//to use this config you just need to import this file instead of the axios library
