import Axios from "./axiosConfig";

export const adminMe = async () => {
    try {
        const resp = await Axios.get("/admin/me");
        return resp;
    } catch (e) {
        console.log(e);
    }
};
export const isAdmin = async () => {
    try {
        const resp = await Axios.get("/isadmin");
        return resp;
    } catch (e) {
        console.log(e);
    }
};
export const login = async (username:any, password:any) => {
    try {
        const resp = await Axios.post("/admin/login", { username, password });
        return resp;
    } catch (e) {
        throw e;
    }
};
export const logout = async () => {
    try {
        const resp = await Axios.post("/admin/logout");
        return resp;
    } catch (e) {
        throw e;
    }
};
