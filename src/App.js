import React, { Fragment } from 'react';
//import logo from './logo.svg';
import Todo from './containers/todo/todo';
import Title from './components/title/title';
import './App.css';

const App = () => (
    <Fragment>
      <Title title="NotePad" />
        <Todo />
    </Fragment>
);

export default App;
