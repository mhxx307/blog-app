import httpRequest from '~/utils/httpRequest';

export const register = async (user) => {
    try {
        const res = await httpRequest.post('/auth/register', user);
        return res;
    } catch (err) {
        return true;
    }
};
