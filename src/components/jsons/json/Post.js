import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {useParams, useHistory} from "react-router-dom";

function Post() {
    const [post, setPost] = useState();
    const {id} = useParams();

    const [myId, setMyId] = useState(id);
    const history = useHistory();

    const fetchPost = async ()=> {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${myId}`);
        const json = await resp.json();

        setPost(json);
    }

    useEffect(() => {
        fetchPost();
    }, [myId]);

    const prevPost = () => {
        myId > 1 && history.push(`/posts/${+myId - 1}`);
    };

    const nextPost = () => {
        myId < 100 && history.push(`/posts/${+myId + 1}`);
    };

    const onHandlerChange = ({target:{value}})=>{
        setMyId(+value)
        // history.push(`/posts/${+value }`) //другий варик
    }
    return (
        <div className={style.item}>
            {post && (
                <>
                {post.id}
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </>
            )}
            <input value={myId} onChange={onHandlerChange}  type="number"/>

            <div className={style.btns}>
                <button onClick={prevPost}>prev post</button>
                <button onClick={nextPost}>next post</button>
            </div>
        </div>
    );
}

export default Post;
