export const TOGGLE_PLAY_MODE =  'toggle_play_mode';

export function togglePlayMode(gameStatus) {
    return {
        type: TOGGLE_PLAY_MODE,
        payload: {
            canPlay: gameStatus
        }
    }
}