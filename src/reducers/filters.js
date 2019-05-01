import { FILTER } from "../const";

const DEFAULT_FILTER = 'all';

const filter = (state = DEFAULT_FILTER, {type, activeFilter}) => {
    switch (type){
        case FILTER:
            return activeFilter;
            break;
        default:
            return state;
    }
};

export default filter;