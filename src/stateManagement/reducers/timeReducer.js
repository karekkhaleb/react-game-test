import {UPDATE_TIME} from "../actions/time-actions";

export default function timeReducer(state = 0, {type, payload}) {
    switch (type){
        case UPDATE_TIME:
            return payload.newTime;
        default:
            return state;
    }
}