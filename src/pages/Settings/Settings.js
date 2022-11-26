import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Input from '~/components/Input';
import { Sidebar } from '~/layouts';
import styles from './Setting.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    return (
        <div className={cx('settings')}>
            <div className={cx('settings-wrapper')}>
                <div className={cx('settings-title')}>
                    <span className={cx('settings-update-title')}>Update Your Account</span>
                    <span className={cx('settings-delete-title')}>Delete Account</span>
                </div>

                <form className={cx('settings-form')}>
                    <label>Profile Picture</label>

                    <div className={cx('settings-profile-picture')}>
                        <img
                            className={cx('settings-profile-img')}
                            src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"
                            alt="profile pp"
                        />

                        <label htmlFor="fileInput">
                            <span className={cx('settings-profile-icon')}>
                                <i className=" far fa-user-circle"></i>
                            </span>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>

                    <Input labelText="Username" type="text" placeHolder="Enter username..." custom1 />

                    <Input labelText="Email" type="email" placeHolder="Enter email..." custom1 />

                    <Input labelText="Password" type="password" placeHolder="Enter password..." custom1 />

                    <Button success className={cx('settings-submit')}>
                        Update
                    </Button>
                </form>
            </div>

            <Sidebar />
        </div>
    );
}

export default Settings;
