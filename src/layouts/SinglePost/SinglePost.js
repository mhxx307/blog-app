import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './SinglePost.module.scss';
import * as postsService from '~/services/postsService';
import Context from '~/storage/Context';

const cx = classNames.bind(styles);

function SinglePost() {
    const [post, setPost] = useState({});
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
    const { user } = useContext(Context);

    useEffect(() => {
        const fetchPost = async () => {
            const post = await postsService.getPost(postId);
            setPost(post);
        };
        fetchPost();
    }, [postId]);

    const handleDelete = async () => {
        await postsService.deletePost(post._id, user.username);
        window.location.replace('/');
    };

    return (
        <div className={cx('single-post')}>
            <div className={cx('single-post-wrapper')}>
                {post.photo && (
                    <img
                        className={cx('single-post-img')}
                        src={process.env.REACT_APP_PUBLIC_FOLDER + post.photo}
                        alt="single post img"
                    />
                )}

                <h1 className={cx('single-post-title')}>
                    {post.title}
                    {post.username === user?.username && (
                        <div className={cx('single-post-edit')}>
                            <span className={cx('single-post-icon')}>
                                <i className="far fa-edit"></i>
                            </span>
                            <span
                                className={cx('single-post-icon')}
                                onClick={handleDelete}
                            >
                                <i className="far fa-trash-alt"></i>
                            </span>
                        </div>
                    )}
                </h1>

                <div className={cx('single-post-info')}>
                    <span className={cx('single-post-author')}>
                        Author:
                        <Link to={`/?user=${post.username}`}>
                            {' '}
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className={cx('single-post-date')}>
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>

                <p className={cx('single-post-desc')}>{post.description}</p>
            </div>
        </div>
    );
}

export default SinglePost;
