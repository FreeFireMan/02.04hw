import React, {useEffect, useState} from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import style from './Json.module.css';
import Todo from "./json/Todo";

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
        <div className={style.json}>
            <div className={style.array}>
                <ul>
                    {
                        todos.map(value => <Link to={`/todos/${value.id}`} key={value.id}> <li>{value.id} - {value.title}</li> </Link>)
                    }
                </ul>
            </div>

            <Switch>
                <Route path={'/todos/:id'} component={Todo} exact />
                <Route> <Redirect to={'/todos'} /> </Route>
            </Switch>
        </div>
    );
}

export default Todos;