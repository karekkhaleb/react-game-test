export const CHANGE_LEVEL = 'change-level';
export const RESET_LEVEL = 'reset-level';

export function changeLevel(levelNumber) {
    return {
        type: CHANGE_LEVEL,
        payload:{
            levelNumber
        }
    }
}
export function resetLevel() {
    return {
        type: RESET_LEVEL,
        payload:{
            levelNumber:0
        }
    }
}