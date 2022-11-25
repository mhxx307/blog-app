import classNames from 'classnames/bind';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
    return (
        <div className={cx('post')}>
            <img
                className={cx('post-img')}
                src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"
                alt="post-img"
            />

            <div className={cx('post-info')}>
                <div className={cx('post-cats')}>
                    <span className={cx('post-cat')}>Music</span>
                    <span className={cx('post-cat')}>Life</span>
                </div>

                <div className={cx('post-title')}>Lorem ipsum dolor sit amet consectetur.</div>
                <hr />

                <div className={cx('post-date')}>1 hour ago</div>
            </div>

            <p className={cx('post-desc')}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos laborum, laudantium aliquam fugit
                nesciunt perferendis. Accusantium odit aliquam assumenda. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Delectus quos laborum, laudantium aliquam fugit nesciunt perferendis. Accusantium odit
                aliquam assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos laborum,
                laudantium aliquam fugit nesciunt perferendis. Accusantium odit aliquam assumenda
            </p>
        </div>
    );
}

export default Post;
