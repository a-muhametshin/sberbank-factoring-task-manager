import {
    ADD_TASK,
    REMOVE_TASK,
    DONE_TASK,
    FILTER
} from '../const';

export const addTask = (id, text, isCompleted) =>({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

export const removeTask = id =>({
    type: REMOVE_TASK,
    id
});

export const doneTask = id =>({
    type: DONE_TASK,
    id
});

export const changeFilter = activeFilter =>({
    type: FILTER,
    activeFilter
});