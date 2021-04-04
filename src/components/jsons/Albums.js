import React, {useEffect, useState} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Json.module.css';
import Album from "./json/Album";

function Albums() {
    const [albums, setAlbums] = useState([]);

    const fetchAlbums = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await resp.json();

        setAlbums(json);
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <div className={style.json}>
            <div className={style.array}>
                <ul>
                    {
                        albums.map(value => <Link to={`/albums/${value.id}`} key={value.id}> <li>{value.id} - {value.title}</li> </Link>)
                    }
                </ul>
            </div>

            <Switch>
                <Route path={'/albums/:id'} component={Album} exact />
                <Route>
                    <Redirect to={'/albums'} />
                </Route>
            </Switch>
        </div>
    );
}

export default Albums;