import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {useParams, useHistory} from "react-router-dom";

function Album() {
    const [album, setAlbum] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchAlbum = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const json = await resp.json();

        setAlbum(json);
    };

    useEffect(() => {
        fetchAlbum();
    }, [id]);

    const prevAlbum = () => {
        id > 1 && history.push(`/albums/${+id - 1}`);
    };

    const nextAlbum = () => {
        id < 100 && history.push(`/albums/${+id + 1}`);
    };

    return (
        <div className={style.item}>
            {album && (
                <>
                    {album.id}
                    <h3>{album.title}</h3>
                </>
            )}

            <div className={style.btns}>
                <button onClick={prevAlbum}>prev album</button>
                <button onClick={nextAlbum}>next album</button>
            </div>
        </div>
    );
}

export default Album;