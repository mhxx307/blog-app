import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './SinglePost.module.scss';
import * as postsService from '~/services/postsService';
import Context from '~/storage/Context';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SinglePost() {
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    const location = useLocation();
    const postId = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchPost = async () => {
            const post = await postsService.getPost(postId);
            setPost(post);
            setTitle(post.title);
            setDesc(post.description);
        };
        fetchPost();
    }, [postId]);

    const handleDelete = async () => {
        await postsService.deletePost(post._id, user.username);
        window.location.replace('/');
    };

    const handleUpdate = async () => {
        await postsService.updatePost(post._id, user.username, title, desc);
        console.log(post._id, user.username);
        // window.location.reload();
        setUpdateMode(false);
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
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className={cx('single-post-title-input')}
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className={cx('single-post-title')}>
                        {title}
                        {post.username === user?.username && (
                            <div className={cx('single-post-edit')}>
                                <span
                                    className={cx('single-post-icon')}
                                    onClick={() => setUpdateMode(true)}
                                >
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
                )}

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
                {updateMode ? (
                    <textarea
                        className={cx('single-post-desc-input')}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className={cx('single-post-desc')}>{desc}</p>
                )}
                {updateMode && (
                    <Button
                        success
                        className={cx('update-btn')}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                )}
            </div>
        </div>
    );
}

export default SinglePost;
