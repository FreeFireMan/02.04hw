import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {useParams, useHistory} from "react-router-dom";

function Post() {
    const [post, setPost] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchPost = async ()=> {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await resp.json();

        setPost(json);
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    const prevPost = () => {
        id > 1 && history.push(`/posts/${+id - 1}`);
    };

    const nextPost = () => {
        id < 100 && history.push(`/posts/${+id + 1}`);
    };

    return (
        <div className={style.item}>
            {post && (
                <>
                {post.id}
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </>
            )}

            <div className={style.btns}>
                <button onClick={prevPost}>prev post</button>
                <button onClick={nextPost}>next post</button>
            </div>
        </div>
    );
}

export default Post;