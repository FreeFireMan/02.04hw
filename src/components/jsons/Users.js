import React, {useEffect, useState} from 'react';

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
        <div>
            <ul>
                {
                    users.map(value => <li key={value.id}>{value.id} - {value.name} - {value.username}</li>)
                }
            </ul>
        </div>
    );
}

export default Users;