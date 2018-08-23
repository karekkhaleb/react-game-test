import {CHECK_CLICKED} from "../actions/click-actions";

export default function clicksReducer(state = [], {type, payload}) {
    switch (type){
        case CHECK_CLICKED:
            return payload.clickedNumbers;
        default:
            return state;
    }
}