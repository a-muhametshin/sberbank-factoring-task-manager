import { ADD_TASK, REMOVE_TASK, DONE_TASK } from '../const';


const TASKS = [
    {
        id: 1,
        text: 'Learn React',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn React-router',
        isCompleted: true
    },
    {
        id: 4,
        text: 'Learn React-dom',
        isCompleted: true
    },
];


const tasks = (state = TASKS, {id, text, isCompleted, type}) =>{
    switch(type){
        case ADD_TASK :
            return [
                ...state, {
                id: id,
                text: text,
                isCompleted: isCompleted
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id);
        case DONE_TASK:
            return [...state].map(task =>{
                if(task.id === id){
                    task.isCompleted = !task.isCompleted
                }
                return task;
            });
        default:
            return state;
    }
};

export default tasks;