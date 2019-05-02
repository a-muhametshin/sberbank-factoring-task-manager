import React from 'react';
import PropTypes  from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <form action="" className="todo-input-wrapper" onSubmit={ onKeyPress }>
        <input className="todo-input"
        placeholder="Введите заметку и нажмите Enter"
        onChange={ onChange }
        value={ value }/>
        <button><i className="fas fa-plus"/></button>
    </form>
);

ToDoInput.propTypes ={
    onChange: PropTypes.func,
    onKeyPress:PropTypes.func,
    value: PropTypes.string
};
ToDoInput.defaultProps ={
    onChange: () =>{},
    onKeyPress: () =>{},
    value: ''
};

export default ToDoInput;