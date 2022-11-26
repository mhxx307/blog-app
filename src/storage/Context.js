import { createContext } from 'react';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
};

const Context = createContext(INITIAL_STATE);

export { INITIAL_STATE };
export default Context;
