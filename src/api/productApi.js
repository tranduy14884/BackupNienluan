import axiosClient from "./axiosClient";

const productApi = {
    async getAll(params)
    {
        const url = '/products';
        return axiosClient.get(url, {params});
        // const productList = axiosClient.get('/products/counts', {params});
        // const newParams = { ...params };
        // newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 6);

        // //remove un-needed key
        // delete newParams._page;
        // //get list products
        // const productList = await axiosClient.get(url, { params : newParams });
        // //create reponse and return
        // return {
        //     data : productList,
        //     pagination: {
        //         page : params._page,
        //         limit : params._limit,
                
        //     }
        // }

    },
    get(id)
    {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(data)
    {
        const url = '/products';
        return axiosClient.post(url, data);
    },
    update(data)
    {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
    


};
export default productApi;