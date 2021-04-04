import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Header.module.css';
import Posts from "../jsons/Posts";
import Comments from "../jsons/Comments";
import Albums from "../jsons/Albums";
import Photos from "../jsons/Photos";
import Todos from "../jsons/Todos";
import Users from "../jsons/Users";

function Header() {
    return (
        <Router>
        <header className={style.header}>
            <h1>JSON Placeholder</h1>
            <nav className={style.nav}>
                <div> <Link to={'/posts'}>POSTS</Link> </div>
                <div> <Link to={'/comments'}>COMMENTS</Link> </div>
                <div> <Link to={'/albums'}>ALBUMS</Link> </div>
                <div> <Link to={'/photos'}>PHOTOS</Link> </div>
                <div> <Link to={'/todos'}>TODOS</Link> </div>
                <div> <Link to={'/users'}>USERS</Link> </div>
            </nav>
        </header>

        <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/comments" component={Comments} />
            <Route path="/albums" component={Albums} />
            <Route path="/photos" component={Photos} />
            <Route path="/todos" component={Todos} />
            <Route path="/users" component={Users} />
            <Route> <Redirect to={'/posts'} /> </Route>
        </Switch>
        </Router>
    );
}

export default Header;