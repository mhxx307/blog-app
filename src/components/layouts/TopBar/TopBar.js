import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';

const cx = classNames.bind(styles);

function TopBar() {
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
                    <li className={cx('top-list-item')}>HOME</li>
                    <li className={cx('top-list-item')}>ABOUT</li>
                    <li className={cx('top-list-item')}>CONTACT</li>
                    <li className={cx('top-list-item')}>WRITE</li>
                    <li className={cx('top-list-item')}>LOGOUT</li>
                </ul>
            </div>
            <div className={cx('top-right')}>
                <img className={cx('top-img')} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user" />
                <label className={cx('search-icon')}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
            </div>
        </div>
    );
}

export default TopBar;
