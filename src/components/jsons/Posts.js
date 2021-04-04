import React, {useState} from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await resp.json();

        setPosts(json);
    }

    return (
        <div>
            <ul>
                {
                    posts.map(value => <li key={value.id}>{value.id} - {value.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Posts;