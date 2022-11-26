import classNames from 'classnames/bind';
import { Sidebar } from '~/layouts';
import SinglePost from '~/layouts/SinglePost';
import styles from './Single.module.scss';

const cx = classNames.bind(styles);

function Single() {
    return (
        <div className={cx('single')}>
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;
