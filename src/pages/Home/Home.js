import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { Header, Posts, Sidebar } from '~/layouts';
import * as postsService from '~/services/postsService';

const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await postsService.getPosts(search);
            setPosts(res);
        };

        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className={cx('home')}>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
