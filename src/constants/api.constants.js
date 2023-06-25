export const API = {
    AUTH: {
        POST: '/auth/login',
        DELETE: '/auth/logout',
        FORGOT_PWD: '/auth/forgot-password',
        RESET_PWD: '/auth/reset-password',
        CHANGE_PWD: '/auth/change-password',
    },
    USERS: {
        GET: '/user',
        EDIT: '/user/update',
        REGISTER: '/user/register',
        VERIFY_EMAIL: '/user/verify-email',
    }
};
