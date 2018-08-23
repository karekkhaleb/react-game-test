export const UPDATE_REMAINING = 'update_remaining';

export function updateRemaining(newRemainingArr) {
    return{
        type: UPDATE_REMAINING,
        payload: {
            remainingBoxes: newRemainingArr
        }
    }
}