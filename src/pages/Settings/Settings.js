import classNames from 'classnames/bind';
import { useContext, useState } from 'react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Input from '~/components/Input';
import { Sidebar } from '~/layouts';
import Context from '~/storage/Context';
import styles from './Setting.module.scss';
import * as imageService from '~/services/imageService';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Settings() {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_START' });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;

            const uploadImage = async () => {
                await imageService.upload(data);
            };
            uploadImage();

            const updateUser = async () => {
                await userService.updateUser(updatedUser, dispatch);
                setSuccess(true);
            };
            updateUser();
        }
    };
    return (
        <div className={cx('settings')}>
            <div className={cx('settings-wrapper')}>
                <div className={cx('settings-title')}>
                    <span className={cx('settings-update-title')}>
                        Update Your Account
                    </span>
                    <span className={cx('settings-delete-title')}>
                        Delete Account
                    </span>
                </div>

                <form className={cx('settings-form')} onSubmit={handleSubmit}>
                    <label>Profile Picture</label>

                    <div className={cx('settings-profile-picture')}>
                        <Image
                            className={cx('settings-profile-img')}
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : process.env.REACT_APP_PUBLIC_FOLDER +
                                      user.profilePic
                            }
                            alt="profile pp"
                        />

                        <label htmlFor="fileInput">
                            <span className={cx('settings-profile-icon')}>
                                <i className=" far fa-user-circle"></i>
                            </span>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <Input
                        labelText="Username"
                        type="text"
                        placeholder={user.username}
                        custom1
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        labelText="Email"
                        type="email"
                        placeholder={user.email}
                        custom1
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        labelText="Password"
                        type="password"
                        placeholder="Enter password..."
                        custom1
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        success
                        className={cx('settings-submit')}
                        type="submit"
                    >
                        Update
                    </Button>
                    {success && (
                        <span
                            style={{
                                color: 'green',
                                textAlign: 'center',
                                marginTop: 10,
                            }}
                        >
                            Profile has been updated...
                        </span>
                    )}
                </form>
            </div>

            <Sidebar />
        </div>
    );
}

export default Settings;
