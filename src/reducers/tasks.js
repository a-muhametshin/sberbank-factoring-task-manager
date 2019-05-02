import { ADD_TASK, REMOVE_TASK, DONE_TASK } from '../const';


const TASKS = [
    {
        id: 1,
        text: 'Пройти собеседование',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Выполнить тестовое задание',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Поступить на работу',
        isCompleted: false
    },
    {
        id: 4,
        text: 'Добиться весомых результатов',
        isCompleted: false
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