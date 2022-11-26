import classNames from 'classnames/bind';
import { Post } from '~/components/layouts';

import styles from './Posts.module.scss';

const cx = classNames.bind(styles);

function Posts({ posts }) {
    return (
        <div className={cx('posts')}>
            {posts.map((post) => {
                return <Post post={post} />;
            })}
        </div>
    );
}

export default Posts;
