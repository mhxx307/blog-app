import * as request from '~/utils/httpRequest';

export const getPosts = async (search) => {
    try {
        const res = await request.get('/posts' + search);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getPost = async (postId) => {
    try {
        const res = await request.get(`/posts/${postId}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
