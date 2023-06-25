import { authTypes } from './auth.type';
import { setAuthToken } from '../../../services/api.services';
import * as AuthService from '../../../services/auth.services';
import { toasterMsg } from '../../../Components/Toaster';

// Login User
export const login = (email, password) => async (dispatch) => {
    const creds = { email, password };
    try {
        const result = await AuthService.login(creds);
        await setSession(result);
        await dispatch(loadUser());
        return { success: result };
    } catch (err) {
        toasterMsg(err.message, 'danger')
    }
};

// Load User
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        await setAuthToken(localStorage.token);
        try {
            const res = await AuthService.getCurrentUser();
            dispatch({
                type: authTypes.USER_LOADED,
                payload: res,
            });
        } catch (err) {
            dispatch({
                type: authTypes.USER_NOT_LOADED,
            });
            console.log('In error');
        }
    } else {
        dispatch({
            type: authTypes.USER_NOT_LOADED,
        });
    }
};

export const setSession = async (authObj) => {
    if (!authObj || !authObj.token) {
        clearSession();
        return;
    }
    localStorage.setItem('token', authObj.token);
    localStorage.setItem('user', JSON.stringify(authObj));
};

export const clearSession = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

// Logout / Clear Profile
export const logout = () => async (dispatch) => {
    await AuthService.logout();
    console.log('in logout');
    clearSession();
    dispatch({ type: authTypes.LOGOUT });
};

export const forgetPassword = ({ email }) => async (dispatch) => {
    try {
        const res = await AuthService.forgetPassword({ email });
        toasterMsg(res.message, 'success');
        return res;
    } catch (err) {
        toasterMsg(err.message, 'danger');
    }
};

export const resetPassword = (data) => async (dispatch) => {
    try {
        const res = await AuthService.resetPassword(data);
        toasterMsg(res.message, 'success');
        return res;
    } catch (err) {
        toasterMsg(err.message, 'danger');
    }
};

export const registerUser = (payload) => async (dispatch) => {
    try {
        const res = await AuthService.registerUser(payload);
        console.log(res, "res")
        toasterMsg(res.message, 'success');
        return res;
    } catch (err) {
        toasterMsg(err.message, 'danger');
    }
};

export const verifyEmail = (payload) => async (dispatch) => {
    try {
        const res = await AuthService.verifyEmail(payload);
        dispatch({ type: authTypes.EMAIL_VERIFIED, payload: res });
    } catch (err) {
        toasterMsg(err.message, 'danger');
    }
};

export const setAuthentication = () => async (dispatch) => {
    // console.log('setAuthentication');
    dispatch({ type: authTypes.USER_NOT_LOADED });
};

