import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-titles')}>
                <span className={cx('header-title-sm')}>React & Node</span>
                <span className={cx('header-title-lg')}>Blog</span>
            </div>
            <img className={cx('header-img')} src={images.headerImg} alt="header-img" />
        </header>
    );
}

export default Header;
