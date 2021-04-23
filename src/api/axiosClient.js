import axios from "axios";

const axiosClient = axios.create({
    baseURL : 'http://localhost:3000/api',
    headers : {
        'Content-Type' : 'application/json',
    }
});

// Interceptor
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response);
    const { config , status , data} = error.response;
    // console.log('config : ' , config.url);
    // console.log('config : ' , data.error);
    const URL = ['/auth/register', '/auth/login']
    if(URL.includes(config.url)  && status === 400)
    {
      const errList = data || [];
      const err = errList.error;
    //  console.log('Loi roi');
      throw new Error(err);
    }
   
    return Promise.reject(error);
  });
export default axiosClient;