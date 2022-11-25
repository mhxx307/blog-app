import classNames from 'classnames/bind';

import Header from '~/components/Header';
import Posts from '~/components/Posts';
import Sidebar from '~/components/Sidebar';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Header />
            <div className={cx('home')}>
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
