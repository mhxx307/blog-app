import classNames from 'classnames/bind';
import styles from './Setting.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    return <div className={cx('setting')}>Settings</div>;
}

export default Settings;
