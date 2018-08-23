import {CHANGE_LEVEL, RESET_LEVEL} from "../actions/level-actions";

export default function levelReducer(state= 0, {type, payload}) {
    switch (type){
        case CHANGE_LEVEL:
            if(localStorage.getItem('level') < payload.levelNumber){
                localStorage.setItem('level', payload.levelNumber);
            }
            return payload.levelNumber;
        case RESET_LEVEL:
            localStorage.setItem('level', payload.levelNumber);
            return payload.levelNumber;
        default:
            return state;
    }
}