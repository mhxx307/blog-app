import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Input from '~/components/Input';
import routes from '~/configs/routes';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <span className={cx('login-title')}>Login</span>
            <form className={cx('login-form')}>
                <Input labelText="Email" type="email" placeholder="Enter your email..." primary />
                <Input labelText="Password" type="password" placeholder="Enter your password..." primary />
                <Button className={cx('login-btn')} primary>
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
}

export default Login;
