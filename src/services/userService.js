import httpRequest from '~/utils/httpRequest';

export const updateUser = async (updatedUser, dispatch) => {
    try {
        const res = await httpRequest.put(
            '/users/' + updatedUser.userId,
            updatedUser,
        );
        dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'UPDATE_FAILURE' });
    }
};
