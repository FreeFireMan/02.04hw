import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {useParams, useHistory} from "react-router-dom";

function Photo() {
    const [photo, setPhoto] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchPhoto = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const json = await resp.json();

        setPhoto(json);
    };

    useEffect(() => {
        fetchPhoto();
    }, [id]);

    const prevPhoto = () => {
        id > 1 && history.push(`/photos/${+id - 1}`);
    };

    const nextPhoto = () => {
        id < 5000 && history.push(`/photos/${+id + 1}`);
    };

    return (
        <div className={style.item}>
            {photo && (
                <>
                    {photo.id}
                    <h3>{photo.title}</h3>
                    <p>{photo.url}</p>
                </>
            )}

            <div className={style.btns}>
                <button onClick={prevPhoto}>prev photo</button>
                <button onClick={nextPhoto}>next photo</button>
            </div>
        </div>
    );
}

export default Photo;