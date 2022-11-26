import classNames from 'classnames/bind';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';
import routes from '~/configs/routes';
import Context from '~/storage/Context';
import styles from './Login.module.scss';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = userRef.current.value;
        const password = passwordRef.current.value;
        const userLogin = async () => {
            await authService.login(username, password, dispatch);
        };

        userLogin();
    };

    return (
        <div className={cx('login')}>
            <span className={cx('login-title')}>Login</span>
            <form className={cx('login-form')} onSubmit={handleSubmit}>
                <Input
                    labelText="Username"
                    type="text"
                    placeholder="Enter your username..."
                    primary
                    ref={userRef}
                />
                <Input
                    labelText="Password"
                    type="password"
                    placeholder="Enter your password..."
                    primary
                    ref={passwordRef}
                />
                <Button
                    className={cx('login-btn')}
                    primary
                    disabled={isFetching}
                >
                    Login
                </Button>
            </form>
            <Button className={cx('register-btn')} success>
                <Link to={routes.register} style={{ color: '#fff' }}>
                    Register
                </Link>
            </Button>
        </div>
    );
};

export default Login;
