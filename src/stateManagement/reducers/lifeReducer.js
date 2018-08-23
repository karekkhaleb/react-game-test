import {ADD_LIFE} from "../actions/lives-actions";

export default function lifeReducer(state = 0, {type, payload}) {
    switch (type){
        case ADD_LIFE:
            localStorage.setItem('life', payload.life);
            return payload.life;
        default:
            return state;
    }
}