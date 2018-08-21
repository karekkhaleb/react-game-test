export const CHANGE_LEVEL = 'change-level';

export function changeLevel(levelNumber) {
    return {
        type: CHANGE_LEVEL,
        payload:{
            levelNumber
        }
    }
}