export const CHANGE_AVAILABLE = 'change_available';

export function changeAvailableBoxesPerClick(newAvailable) {
    return{
        type: CHANGE_AVAILABLE,
        payload:{
            newAvailableBoxes: newAvailable
        }
    }
}