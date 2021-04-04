import React, {useEffect, useState} from 'react';

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
        <div>
            <ul>
                {
                    albums.map(value => <li key={value.id}>{value.id} - {value.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Albums;