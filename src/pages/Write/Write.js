import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Write.module.scss';

const cx = classNames.bind(styles);

function Write() {
    return (
        <div className={cx('write')}>
            <img
                className={cx('write-img')}
                src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"
                alt="write img"
            />

            <form action="" className={cx('write-form')}>
                <div className={cx('write-form-group')}>
                    <label htmlFor="fileInput">
                        <span className={cx('write-plus-icon')}>
                            <i className="fas fa-plus"></i>
                        </span>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Title" className={cx('write-input')} autoFocus />
                </div>

                <div className={cx('write-form-group')}>
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className={cx('write-input', 'write-text')}
                        spellCheck="false"
                    ></textarea>
                </div>

                <Button className={cx('write-submit')} success>
                    Publish
                </Button>
            </form>
        </div>
    );
}

export default Write;
