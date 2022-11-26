import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post({ post }) {
    return (
        <div className={cx('post')}>
            <Image
                className={cx('post-img')}
                src={process.env.REACT_APP_PUBLIC_FOLDER + post.photo}
                alt={post.photo}
            />

            <div className={cx('post-info')}>
                <div className={cx('post-cats')}>
                    {post.categories.map((cat, index) => (
                        <span className={cx('post-cat')} key={index}>
                            {cat.name}
                        </span>
                    ))}
                </div>

                <Link to={`/post/${post._id}`}>
                    <span className={cx('post-title')}>{post.title}</span>
                </Link>

                <hr />

                <div className={cx('post-date')}>
                    {new Date(post.createdAt).toDateString()}
                </div>
            </div>

            <p className={cx('post-desc')}>{post.description}</p>
        </div>
    );
}

export default Post;
