import {CHANGE_AVAILABLE} from "../actions/available-boxes-per-click-actions";

export default function availableBoxesReducer(state=[], {type, payload}) {
    switch (type){
        case CHANGE_AVAILABLE:
            return payload.newAvailableBoxes;
        default:
            return state;
    }
}