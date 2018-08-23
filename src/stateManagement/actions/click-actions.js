export const CHECK_CLICKED = 'check_clicked';

export function checkClicked(clickedNumbers) {
    return {
        type: CHECK_CLICKED,
        payload: {
            clickedNumbers
        }
    }
}