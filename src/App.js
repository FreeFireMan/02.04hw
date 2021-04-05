import React from 'react';
import './App.css';
import {Switch, Route,Redirect} from "react-router-dom";
import Header from "./components/headers/Header";
import Posts from "./components/jsons/Posts";
import Comments from "./components/jsons/Comments";
import Albums from "./components/jsons/Albums";
import Photos from "./components/jsons/Photos";
import Todos from "./components/jsons/Todos";
import Users from "./components/jsons/Users";

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/comments" component={Comments} />
            <Route path="/albums" component={Albums} />
            <Route path="/photos" component={Photos} />
            <Route path="/todos" component={Todos} />
            <Route path="/users" component={Users} />
            <Route> <Redirect to={'/posts'} /> </Route>
        </Switch>
    </div>
  );
}

export default App;
