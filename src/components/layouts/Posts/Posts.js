import classNames from 'classnames/bind';
import { Post } from '~/components/layouts';

import styles from './Posts.module.scss';

const cx = classNames.bind(styles);

function Posts() {
    return (
        <div className={cx('posts')}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
