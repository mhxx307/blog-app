import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { Header, Posts, Sidebar } from '~/components/layouts';

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
