import httpRequest, * as request from '~/utils/httpRequest';

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

export const createPost = async (newPost) => {
    try {
        const res = await httpRequest.post('/posts', newPost);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = async (postId, username) => {
    try {
        const res = await httpRequest.delete(`/posts/${postId}`, {
            data: {
                username,
            },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = async (postId, username, title, desc) => {
    try {
        const res = await httpRequest.put(`/posts/${postId}`, {
            data: {
                username,
                title,
                description: desc,
            },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
