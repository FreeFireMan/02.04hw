import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useHistory} from "react-router-dom";

function Comment() {
    const [comment, setComment] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchComment = async ()=> {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        const json = await resp.json();

        setComment(json);
    }

    useEffect(() => {
        fetchComment();
    }, [id]);

    const prevComment = () => {
        id > 1 && history.push(`/comments/${+id - 1}`);
    };

    const nextComment = () => {
        id < 500 && history.push(`/comments/${+id + 1}`);
    };

    return (
        <div className={style.item}>
            {comment && (
                <>
                    {comment.id}
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </>
            )}

            <div className={style.btns}>
                <button onClick={prevComment}>prev comment</button>
                <button onClick={nextComment}>next comment</button>
            </div>
        </div>
    );
}

export default Comment;