import httpRequest from '~/utils/httpRequest';

export const register = async (user) => {
    try {
        const res = await httpRequest.post('/auth/register', user);
        return res;
    } catch (err) {
        return true;
    }
};

export const login = async (username, password, dispatch) => {
    dispatch({ type: 'LOGIN_START' });
    try {
        const res = await httpRequest.post('/auth/login', {
            username,
            password,
        });
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'LOGIN_FAILURE' });
    }
};
