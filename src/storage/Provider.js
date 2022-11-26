import { useEffect, useReducer } from 'react';
import Context, { INITIAL_STATE } from './Context';
import Reducer from './Reducer';

function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
