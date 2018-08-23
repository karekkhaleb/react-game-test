export const UPDATE_TIME = 'update_time';

export function updateTime(newTime) {
    return{
        type: UPDATE_TIME,
        payload:{
            newTime
        }
    }
}