import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import styles from './TopBar.module.scss';

const cx = classNames.bind(styles);

function TopBar() {
    const user = false;
    return (
        <div className={cx('top')}>
            <div className={cx('top-left')}>
                <label className={cx('top-icon')}>
                    <i className="top-icon fa-brands fa-square-facebook"></i>
                </label>
                <label className={cx('top-icon')}>
                    <i className="top-icon fa-brands fa-square-twitter"></i>
                </label>
                <label className={cx('top-icon')}>
                    <i className="top-icon fa-brands fa-square-pinterest"></i>
                </label>
                <label className={cx('top-icon')}>
                    <i className="top-icon fa-brands fa-square-instagram"></i>
                </label>
            </div>
            <div className={cx('top-center')}>
                <ul className={cx('top-list')}>
                    <li className={cx('top-list-item')}>
                        <Link to={routes.home}>HOME</Link>
                    </li>
                    <li className={cx('top-list-item')}>
                        <Link to={routes.about}>ABOUT</Link>
                    </li>
                    <li className={cx('top-list-item')}>
                        <Link to={routes.contact}>CONTACT</Link>
                    </li>
                    <li className={cx('top-list-item')}>
                        <Link to={routes.write}>WRITE</Link>
                    </li>
                    <li className={cx('top-list-item')}>{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className={cx('top-right')}>
                {user ? (
                    <img
                        className={cx('top-img')}
                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                        alt="user"
                    />
                ) : (
                    <ul className={cx('top-list')}>
                        <li className={cx('top-list-item')}>
                            <Link to={routes.login}>LOGIN</Link>
                        </li>
                        <li className={cx('top-list-item')}>
                            <Link to={routes.register}>REGISTER</Link>
                        </li>
                    </ul>
                )}

                <label className={cx('search-icon')}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
            </div>
        </div>
    );
}

export default TopBar;
