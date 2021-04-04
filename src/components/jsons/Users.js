import React, {useEffect, useState} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Json.module.css';
import User from "./json/User";

function Users() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await resp.json();

        setUsers(json);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className={style.json}>
            <div className={style.array}>
                <ul>
                    {
                        users.map(value => <Link to={`/users/${value.id}`} key={value.id}> <li>{value.id} - {value.name} - {value.username}</li> </Link>)
                    }
                </ul>
            </div>

            <Switch>
                <Route path={'/users/:id'} component={User} exact />
                <Route> <Redirect to={'/users'} /> </Route>
            </Switch>
        </div>
    );
}

export default Users;