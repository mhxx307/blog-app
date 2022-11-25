import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Input from '~/components/Input';
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
                Login
            </Button>
        </div>
    );
}

export default Register;
