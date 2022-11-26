import * as request from '~/utils/httpRequest';

export const getCategories = async () => {
    try {
        const res = await request.get('/categories');
        return res;
    } catch (err) {
        console.log(err);
    }
};
