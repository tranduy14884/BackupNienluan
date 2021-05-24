import axiosClient from "./axiosClient";

const userApi = {

  
    register(data)
    {
        const url = '/auth/register';
        return axiosClient.post(url, data);
    },
    login(data)
    {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },
    async getAll(params)
    {
        const url = '/accounts';
        return axiosClient.get(url, {params});
    },
    get(id)
    {
        const url = `/accounts/${id}`;
        return axiosClient.get(url);
    },
    add(data)
    {
        const url = '/accounts';
        return axiosClient.patch(url,data);
    },
    remove(id)
    {
        const url = `/accounts/${id}`;
        return axiosClient.delete(url);
    },
    updated(data)
    {
        const url = '/accounts';
        return axiosClient.put(url,data);
    }
    
};
export default userApi;