import httpRequest from '~/utils/httpRequest';

export const upload = async (data) => {
    try {
        await httpRequest.post('/upload', data);
    } catch (err) {
        console.log(err);
    }
};
