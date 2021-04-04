import React, {useState, useEffect} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Json.module.css';
import Post from "./json/Post";

function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await resp.json();

        setPosts(json);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className={style.json}>
            <div className={style.array}>
                <ul>
                    {
                        posts.map(value => <Link to={`/posts/${value.id}`} key={value.id}> <li>{value.id} - {value.title}</li> </Link>)
                    }
                </ul>
            </div>

            <Switch>
                <Route path="/posts/:id" exact>
                    <Post />
                </Route>
                <Route>
                    <Redirect to={'/posts'} />
                </Route>
            </Switch>
        </div>
    );
}

export default Posts;