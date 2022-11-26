import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';
import routes from '~/configs/routes';
import styles from './Register.module.scss';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const register = async () => {
            const user = {
                username,
                email,
                password,
            };
            const res = await authService.register(user);
            res.data && window.location.replace('/login');
            setError(res);
        };

        register();
    };

    return (
        <div className={cx('register')}>
            <span className={cx('register-title')}>Register</span>
            <form className={cx('register-form')} onSubmit={handleSubmit}>
                <Input
                    labelText="Username"
                    type="text"
                    placeholder="Enter your username..."
                    primary
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    labelText="Email"
                    type="email"
                    placeholder="Enter your email..."
                    primary
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    labelText="Password"
                    type="password"
                    placeholder="Enter your password..."
                    primary
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className={cx('register-btn')} success type="submit">
                    Register
                </Button>
            </form>
            <Button className={cx('login-btn')} primary>
                <Link to={routes.login} style={{ color: '#fff' }}>
                    Login
                </Link>
            </Button>
            {error && (
                <span className={cx('register-error')}>
                    Something went wrong!
                </span>
            )}
        </div>
    );
}

export default Register;
