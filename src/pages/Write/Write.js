import classNames from 'classnames/bind';
import { useContext, useState } from 'react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Context from '~/storage/Context';
import styles from './Write.module.scss';
import * as postsService from '~/services/postsService';
import * as imageService from '~/services/imageService';

const cx = classNames.bind(styles);

function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description: desc,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;

            const uploadImage = async () => {
                await imageService.upload(data);
            };
            uploadImage();
        }

        const createNewPost = async () => {
            const res = await postsService.createPost(newPost);
            console.log(res);
            window.location.replace('/post/' + res.data._id);
        };

        createNewPost();
    };

    return (
        <div className={cx('write')}>
            {file && (
                <Image
                    className={cx('write-img')}
                    src={URL.createObjectURL(file)}
                    alt="write img"
                />
            )}

            <form
                action=""
                className={cx('write-form')}
                onSubmit={handleSubmit}
            >
                <div className={cx('write-form-group')}>
                    <label htmlFor="fileInput">
                        <span className={cx('write-plus-icon')}>
                            <i className="fas fa-plus"></i>
                        </span>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className={cx('write-input')}
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className={cx('write-form-group')}>
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className={cx('write-input', 'write-text')}
                        spellCheck="false"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>

                <Button className={cx('write-submit')} success type="submit">
                    Publish
                </Button>
            </form>
        </div>
    );
}

export default Write;
