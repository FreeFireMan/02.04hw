import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {useParams, useHistory} from "react-router-dom";

function User() {
    const [user, setUser] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchUser = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await resp.json();

        setUser(json);
    };

    useEffect(() => {
        fetchUser();
    } ,[id]);

    const prevUser = () => {
        id > 1 && history.push(`/users/${+id - 1}`);
    };

    const nextUser = () => {
        id > 10 && history.push(`/users/${+id + 1}`);
    };

    return (
        <div className={style.item}>
            {user && (
                <>
                    {user.id}
                    <h3>{user.name} - {user.username}</h3>
                    <p>{user.email}</p>
                </>
            )}
            <div className={style.btns}>
                <button onClick={prevUser}>prev user</button>
                <button onClick={nextUser}>next user</button>
            </div>
        </div>
    );
}

export default User;