import React from 'react';
//import logo from './logo.svg';
import Todo from './containers/todo/todo';
import Title from './components/title/title';
import './App.css';

const App = () => (
    <div className="taskmanager-wrapper">
      <Title title="записная книжка" />
      <Todo />
    </div>
);

export default App;
