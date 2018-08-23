import { TOGGLE_PLAY_MODE } from "../actions/can-play-actions";


export default function canPlayReducer(store = false, {type, payload}) {
    switch (type){
        case TOGGLE_PLAY_MODE:
            return payload.canPlay;
        default:
            return store
    }
}