import { UPDATE_REMAINING } from "../actions/remaining-level-boxes-actions";

export default function updateRemainBoxes(state = [], {type, payload}) {
    switch (type){
        case UPDATE_REMAINING:
            return payload.remainingBoxes;
        default:
            return state;
    }
}