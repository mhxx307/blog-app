import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import * as categoriesService from '~/services/categoriesService';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Sidebar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const res = await categoriesService.getCategories();
            setCategories(res);
        };
        getCategories();
    }, []);
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>ABOUT ME</span>
                <Image
                    className={cx('sidebar-img')}
                    src={images.profile}
                    alt="user"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem quibusdam odit incidunt asperiores harum natus eos?
                    Ea maiores voluptatem nam.
                </p>
            </div>

            <div className={cx('sidebar-item')}>
                <span className={cx('sidebar-title')}>CATEGORIES</span>
                <ul className={cx('sidebar-list')}>
                    {categories.map((category, index) => (
                        <Link to={`/?cat=${category.name}`} key={index}>
                            <li className={cx('sidebar-list-item')}>
                                {category.name}
                            </li>
                        </Link>
                    ))}
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
