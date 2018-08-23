import { GET_POSSIBILITIES } from "../actions/possibilities-actions";
import {CLEAN_POSSIBILITIES} from "../actions/possibilities-actions";

export default function possibilitiesReducer(state=[], {type, payload}) {
    switch (type){
        case GET_POSSIBILITIES:
            return payload.possibilities;
        case CLEAN_POSSIBILITIES:
            return payload.possibilities;
        default:
            return state;
    }
}