import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { Header, Posts, Sidebar } from '~/components/layouts';
import * as postsService from '~/services/postsService';

const cx = classNames.bind(styles);

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await postsService.getPosts();
            setPosts(res);
        };

        fetchPosts();
    }, []);

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
