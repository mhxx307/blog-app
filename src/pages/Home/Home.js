import classNames from 'classnames/bind';
import Header from '~/components/Header';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <Header />
        </div>
    );
}

export default Home;
