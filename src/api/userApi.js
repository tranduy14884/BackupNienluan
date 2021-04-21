import axiosClient from "./axiosClient";

const userApi = {

  
    register(data)
    {
        const url = '/accounts';
        return axiosClient.post(url, data);
    },
    
};
export default userApi;