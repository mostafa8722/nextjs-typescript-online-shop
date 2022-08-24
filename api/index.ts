import  { AxiosRequestConfig, AxiosResponse } from "axios";
//import { toast2 } from "react-toastify";
import Axios from "./axiosConfig";


export const StorageKey = "phocus_session";

export const getToken = () => {
    const emp = localStorage.getItem(StorageKey);
    if (emp) {
        return emp;
    } else {
        return null;
    }
};

export const fetcher = async (url: string) => {
    try {
        const resp = await get(url);
        return resp.data;
    } catch (error) {
        console.log(error);
    }
};

export const get = (path: string, config?:AxiosRequestConfig, withPagination: boolean = false) => {
  
   // let path2 = ""+path
    const onSuccess = (response: AxiosResponse<any>) => {
         console.log("Get Request Successful!", response);
       
         
        if (withPagination) {
            // with patgination
            return response.data;
        } else {
            return response.data;
        }
    };

    const onError = (error: any) => {
        console.error("Get Request Failed:", error.config);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
           // toast.error(error.response.data.error);
            console.error("Headers:", error.response.headers);
        } else {
            console.error("Error Message ---------------:", error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return Axios.get(path, config)
        .then(onSuccess)
        .catch(onError);
};

export const delete_ = (path: string, params: AxiosRequestConfig["params"] = null, data: any = null) => {
    let headers = {};

    const onSuccess = (response: AxiosResponse<any>) => {
        // console.error("Get Request Successful!", response);
        return response.data;
    };

    const onError = (error: any) => {
        console.error("Get Request Failed:", error.config);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
           // toast.error(error.response.data.Message);
            console.error("Headers:", error.response.headers);
        } else {
            console.error("Error Message:", error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return Axios.delete(path, {
        params,
        headers,
        data,
    })
        .then(onSuccess)
        .catch(onError);
};

export function post(path: string, data: any, params?: any) {
  
    let headers = {
        "Content-Type": "application/json",
    };

    const onSuccess = (response: AxiosResponse<any>) => {
        // console.error("Post Request Successful!", response);
        return response.data;
    };

    const onError = (error: any) => {
        console.error("Post Request Failed:", error.config);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
            //toast.error(error.response.data.Message || error.response.data.error);
            console.error("Headers:", error.response.headers);
        } else {
            console.error("Error Message:", error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return Axios.post(path, data, {
        headers,
        params,
    })
        .then(onSuccess)
        .catch(onError);
}

export function put(path: string, data: any, headers = { "Content-Type": "multipart/form-data" }, params?: any) {
    const onSuccess = (response: AxiosResponse<any>) => {
        // console.error("Post Request Successful!", response);
        return response.data;
    };

    const onError = (error: any) => {
        console.error("Post Request Failed:", error.config);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
           // toast.error(error.response.data.error);
            console.error("Headers:", error.response.headers);
        } else {
            console.error("Error Message:", error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    console.log("ttt",data)
    return Axios.put(path, data, {
        headers,
        params,
    })
        .then(onSuccess)
        .catch(onError);
}

export function patch(path2: string, data: any, headers = { "Content-Type": "application/json","Authorization":"" }, params?: any) {
    headers.Authorization = 'Bearer '+data.token;

    let path = "http://212.23.201.222:3000/api/"+path2
    const onSuccess = (response: AxiosResponse<any>) => {
        // console.error("Post Request Successful!", response);
        return response.data;
    };

    const onError = (error: any) => {
        console.error("Post Request Failed:", error.config);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
            //toast.error(error.response.data.error);
            console.error("Headers:", error.response.headers);
        } else {
            console.error("Error Message:", error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return Axios.patch(path, data, {
        headers,
        params,
    })
        .then(onSuccess)
        .catch(onError);
}

export function uploadFile(name:string, file: any) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sampleFile", name);
    formData.append("name", name);

    return post("/upload", formData);
}
