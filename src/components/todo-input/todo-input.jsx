import React from 'react';
import PropTypes  from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus"/>
        <input className="todo-input"
        placeholder="Введите заметку и нажмите Enter"
        onChange={ onChange }
        onKeyPress={ onKeyPress }
        value={ value }/>
    </div>
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