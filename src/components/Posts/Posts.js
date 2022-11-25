import classNames from 'classnames/bind';
import styles from './Posts.module.scss';

const cx = classNames.bind(styles);

function Posts() {
    return <div className={cx('posts')}>Posts</div>;
}

export default Posts;
