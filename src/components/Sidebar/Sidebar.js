import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>ABOUT ME</span>
                <img
                    className={cx('sidebar-img')}
                    src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                    alt="user"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quibusdam odit incidunt asperiores
                    harum natus eos? Ea maiores voluptatem nam.
                </p>
            </div>

            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>CATEGORIES</span>
                <ul className={cx('sidebar-list')}>
                    <li className={cx('sidebar-list-item')}>Life</li>
                    <li className={cx('sidebar-list-item')}>Music</li>
                    <li className={cx('sidebar-list-item')}>Style</li>
                    <li className={cx('sidebar-list-item')}>Sport</li>
                    <li className={cx('sidebar-list-item')}>Tech</li>
                    <li className={cx('sidebar-list-item')}>Cinema</li>
                </ul>
            </div>

            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>FOLLOW US</span>
                <div className={cx('sidebar-social')}>
                    <span className={cx('sidebar-icon')}>
                        <i className="sidebar-icon fab fa-facebook-square"></i>
                    </span>
                    <span className={cx('sidebar-icon')}>
                        <i className="sidebar-icon fab fa-twitter-square"></i>
                    </span>
                    <span className={cx('sidebar-icon')}>
                        <i className="sidebar-icon fab fa-pinterest-square"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
