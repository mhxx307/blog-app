import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';
import routes from '~/config/routes';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('register')}>
            <span className={cx('register-title')}>Register</span>
            <form className={cx('register-form')}>
                <Input labelText="Username" type="text" placeholder="Enter your username..." primary />
                <Input labelText="Email" type="email" placeholder="Enter your email..." primary />
                <Input labelText="Password" type="password" placeholder="Enter your password..." primary />
                <Button className={cx('register-btn')} success>
                    Register
                </Button>
            </form>
            <Button className={cx('login-btn')} primary>
                <Link to={routes.login} style={{ color: '#fff' }}>
                    Login
                </Link>
            </Button>
        </div>
    );
}

export default Register;
