import axios from 'axios';
import { toasterMsg } from "../Components/Toaster";
import { logout } from '../Pages/Login/store/auth.action';
import store from "../store";

export const apiClient = axios.create();
apiClient.defaults.withCredentials = true;

export const apiEndpoint = `http://localhost:9001/api`;

export const setAuthToken = async (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = 'bearer ' + token;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};


apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            store.dispatch(logout());
            toasterMsg(error.response.data.message || error.response.data, 'danger');
        }
        throw error.response ? error.response.data : error;
    }
);

export const config = {
    headers: {
        'content-type': 'multipart/form-data',
    },
};
