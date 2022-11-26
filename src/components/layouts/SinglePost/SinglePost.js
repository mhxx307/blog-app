import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import styles from './SinglePost.module.scss';

const cx = classNames.bind(styles);

function SinglePost() {
    const location = useLocation();

    return (
        <div className={cx('single-post')}>
            <div className={cx('single-post-wrapper')}>
                <img
                    className={cx('single-post-img')}
                    src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"
                    alt="single post img"
                />

                <h1 className={cx('single-post-title')}>
                    Lorem ipsum dolor sit amet
                    <div className={cx('single-post-edit')}>
                        <span className={cx('single-post-icon')}>
                            <i className="far fa-edit"></i>
                        </span>
                        <span className={cx('single-post-icon')}>
                            <i className="far fa-trash-alt"></i>
                        </span>
                    </div>
                </h1>

                <div className={cx('single-post-info')}>
                    <span className={cx('single-post-author')}>
                        Author: <b>Quan</b>
                    </span>
                    <span className={cx('single-post-date')}>1 hour ago</span>
                </div>

                <p className={cx('single-post-desc')}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi officiis pariatur veritatis odit
                    repellat quam consequatur, reiciendis qui officia numquam soluta laboriosam magni earum, eligendi
                    dicta voluptate praesentium error! Ea, cupiditate beatae quas rerum aliquid porro minima fugit
                    repellendus provident. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi officiis
                    pariatur veritatis odit repellat quam consequatur, reiciendis qui officia numquam soluta laboriosam
                    magni earum, eligendi dicta voluptate praesentium error! Ea, cupiditate beatae quas rerum aliquid
                    porro minima fugit repellendus provident. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quasi officiis pariatur veritatis odit repellat quam consequatur, reiciendis qui officia numquam
                    soluta laboriosam magni earum, eligendi dicta voluptate praesentium error! Ea, cupiditate beatae
                    quas rerum aliquid porro minima fugit repellendus provident.
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
