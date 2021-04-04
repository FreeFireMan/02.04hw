import React, {useEffect, useState} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Json.module.css';
import Comment from "./json/Comment";

function Comments() {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
        const json = await resp.json();

        setComments(json);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className={style.json}>
            <div className={style.array}>
                <ul>
                    {
                        comments.map(value => <Link to={`/comments/${value.id}`} key={value.id}> <li>{value.id} - {value.name}</li> </Link>)
                    }
                </ul>
            </div>

            <Switch>
                <Route path="/comments/:id" exact>
                    <Comment />
                </Route>
                <Route>
                    <Redirect to={'/comments'} />
                </Route>
            </Switch>
        </div>
    );
}

export default Comments;