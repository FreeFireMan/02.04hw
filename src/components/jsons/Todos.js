import React, {useEffect, useState} from 'react';

function Todos() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await resp.json();

        setTodos(json);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <ul>
                {
                    todos.map(value => <li key={value.id}>{value.id} - {value.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Todos;