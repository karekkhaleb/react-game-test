import {CHANGE_LEVEL} from "../actions/level-actions";

export default function levelReducer(state= 0, {type, payload}) {
    switch (type){
        case CHANGE_LEVEL:
            return payload.levelNumber;
        default:
            return state;
    }
}