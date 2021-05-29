import axiosClient from "./axiosClient";

const roomApi = {

  
    getAll(params)
    {
        const url = '/rooms';
        return axiosClient.get(url, {params});
    },
    get(id)
    {
        const url = `/rooms/${id}`;
        return axiosClient.get(url);
    },
    add(data)
    {
        const url = '/rooms';
        return axiosClient.post(url, data);
    },
    update(data)
    {
        const url = `/rooms/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `/rooms/${id}`;
        return axiosClient.delete(url);
    }
    
};
export default roomApi;