import axiosClient from "./axiosClient";

const detailApi = {

  
    getAll(params)
    {
        const url = '/details';
        return axiosClient.get(url, {params});
    },
    get(id)
    {
        const url = `/details/${id}`;
        return axiosClient.get(url);
    },
    add(data)
    {
        const url = '/details';
        return axiosClient.post(url, data);
    },
    update(data)
    {
        const url = `/details/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `/details/${id}`;
        return axiosClient.delete(url);
    }
    
};
export default detailApi;