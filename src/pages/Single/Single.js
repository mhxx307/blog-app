import classNames from 'classnames/bind';
import { Sidebar } from '~/components/layouts';
import SinglePost from '~/components/layouts/SinglePost';
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
