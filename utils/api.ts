
import axios from 'axios';
import getConfig from 'next/config';
import router from 'next/router';
const { publicConfig } = getConfig();
const $axios = axios.create({ baseURL: publicConfig.backendUrl });

$axios.interceptors.request.use(req => {
    const token = '';
    if (token) 
        req.headers['Authorization'] = 'Bearer ' + token;
    return req;
}, err => {
    if (err) 
        return Promise.reject(err);
});

$axios.interceptors.response.use(res => res,
    err => {
        if (err &&  err.response && err.response.status === 401) 
            return router.push('/login');
    }
);

export default $axios;
