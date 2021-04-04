import React, {useEffect, useState} from 'react';
import style from '../Json.module.css';
import {useParams, useHistory} from "react-router-dom";

function Todo() {
    const [todo, setTodo] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchTodo = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const json = await resp.json();

        setTodo(json);
    };

    useEffect(() => {
        fetchTodo();
    }, [id]);

    const prevTodo = () => {
      id > 1 && history.push(`/todos/${+id - 1}`);
    };

    const nextTodo = () => {
        id > 200 && history.push(`/todos/${+id + 1}`);
    };

    return (
        <div className={style.item}>
            {todo && (
                <>
                    {todo.id}
                    <h3>{todo.title}</h3>
                    <p>{todo.completed.toString()}</p>
                </>
            )}

            <div className={style.btns}>
                <button onClick={prevTodo}>prev todo</button>
                <button onClick={nextTodo}>next todo</button>
            </div>
        </div>
    );
}

export default Todo;