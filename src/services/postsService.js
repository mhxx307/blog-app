import * as request from '~/utils/httpRequest';

export const getPosts = async () => {
    try {
        const res = await request.get('/posts');
        return res;
    } catch (err) {
        console.log(err);
    }
};
