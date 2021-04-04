import React, {useEffect, useState} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Json.module.css';
import Photo from "./json/Photo";

function Photos() {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await resp.json();

        setPhotos(json);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <div className={style.json}>
            <div className={style.array}>
                <ul>
                    {
                        photos.map(value => <Link to={`/photos/${value.id}`} key={value.id}> <li>{value.id} - {value.title}</li> </Link>)
                    }
                </ul>
            </div>

            <Switch>
                <Route path={'/photos/:id'} component={Photo} exact />
                <Route> <Redirect to={'/photos'} /> </Route>
            </Switch>
        </div>
    );
}

export default Photos;