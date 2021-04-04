import React, {useEffect, useState} from 'react';

function Comments() {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
        const json = await resp.json();

        setComments(json);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            <ul>
                {
                    comments.map(value => <li key={value.id}>{value.id} - {value.name}</li>)
                }
            </ul>
        </div>
    );
}

export default Comments;