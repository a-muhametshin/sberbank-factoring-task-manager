import React, { Component } from 'react';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import { connect } from 'react-redux';
import { addTask, removeTask, doneTask, changeFilter } from '../../actions/actionCreator';
import './todo.css';


class Todo extends Component{

    state = {
        tasksText: '',
        filterTasks: [],
    };

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            tasksText: value,
            filterTasks: [],
        })
    };
    addTask = ({ key }) =>{
        const { tasksText } = this.state;
        if(tasksText.length>3 && key === 'Enter'){
            const { addTask } = this.props;
            addTask((new Date()).getTime(), tasksText, false);

            this.setState({
                tasksText: '',
            })
        }
    };


    render(){
        const { tasksText } = this.state;
        const { tasks, removeTask, doneTask, filters, changeFilter, filtredTasks } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        //debugger;
        //const filterTasks = this.filterTasks(tasks, filters);
        return(
            <div className="todo-wrapper">
                <ToDoInput onKeyPress={ this.addTask } onChange={ this.handleInputChange } value={ tasksText }/>
                { isTasksExist && <ToDoList doneTask={ doneTask } tasksList={ filtredTasks } removeTask={ removeTask } /> }
                { isTasksExist && <Footer amount={ tasks.length } changeFilter={ changeFilter } activeFilter={ filters } /> }
            </div>
        )

    }

}
export default connect(({tasks, filters}) =>({
    tasks,
    filters,
    filtredTasks: (() => {
        switch (filters){
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    })()
}), { addTask, removeTask, doneTask, changeFilter })(Todo);