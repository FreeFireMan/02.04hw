import React, {useEffect, useState} from 'react';

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
        <div>
            <ul>
                {
                    photos.map(value => <li key={value.id}>{value.id} - {value.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Photos;