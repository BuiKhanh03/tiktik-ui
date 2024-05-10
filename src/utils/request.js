import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

//Use async will return a promise
export const get = async (path, option = {}) => {
    //await help sync code
    //Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.
    const response = await request(path, option);
    return response.data;
};

export default request;
