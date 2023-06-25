import { apiClient, apiEndpoint } from './api.services';
import { API } from '../constants/api.constants';

export const registerUser = async (payload) => {
    return apiClient.post(`${apiEndpoint}${API.USERS.REGISTER}`, payload);
};

export const login = async (creds) => {
    return apiClient.post(`${apiEndpoint}${API.AUTH.POST}`, creds);
};

export const getCurrentUser = async () => {
    return apiClient.get(`${apiEndpoint}${API.USERS.GET}`);
};

export const logout = async () => {
    return apiClient.delete(`${apiEndpoint}${API.AUTH.DELETE}`);
};

export const forgetPassword = async (email) => {
    return apiClient.post(`${apiEndpoint}${API.AUTH.FORGOT_PWD}`, email);
};

export const resetPassword = async (payload) => {
    return apiClient.post(`${apiEndpoint}${API.AUTH.RESET_PWD}`, payload);
};

export const changePwd = async (data) => {
    return apiClient.post(`${apiEndpoint}${API.AUTH.CHANGE_PWD}`, data);
};

export const verifyEmail = async (payload) => {
    return apiClient.post(`${apiEndpoint}${API.USERS.VERIFY_EMAIL}`, payload);
};

