import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./components/headers/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
