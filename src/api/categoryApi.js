import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(params)
    {
        const url = '/categoryApi';
        return axiosClient.get(url, {params});
    },
    get(id)
    {
        const url = `/categoryApi/${id}`;
        return axiosClient.get(url);
    },
    add(data)
    {
        const url = '/categoryApi';
        return axiosClient.post(url, data);
    },
    update(data)
    {
        const url = `/categoryApi/${data.id}`;
        return axiosClient.patch(url);
    },
    remove(id){
        const url = `/categoryApi/${id}`;
        return axiosClient.delete(url);
    }
    


};
export default categoryApi;