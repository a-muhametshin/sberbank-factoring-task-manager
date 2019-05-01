import React from 'react';
import PropTypes  from 'prop-types';
import ToDoItem from '../todo-item/todo-item';
import './todo-list.css';


const ToDoList = ({ tasksList, removeTask, doneTask }) => (
    <ul className="todo-list">
        { tasksList.map(({ id, text, isCompleted }) =>(
            <ToDoItem key={ id } id={id} doneTask={ doneTask } removeTask={removeTask} text={ text } isCompleted={ isCompleted } />
        )) }
    </ul>
);

ToDoList.propTypes ={
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    doneTask: PropTypes.func
};

ToDoList.defaultProps ={
    tasksList: [],
    removeTask: () => {},
    doneTask: () => {}

};

export default ToDoList;