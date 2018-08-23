import { Level } from "../../components/levelTools/levelTools";


export const GET_POSSIBILITIES = 'get_possibilities';
export const CLEAN_POSSIBILITIES = 'clean_possibilities';

export function getPossibilities(clickedNumberBox, currentLevel) {
    let newLevel = new Level(clickedNumberBox, currentLevel);
    let possibilities = newLevel.generatePossibilities();
    return{
        type: GET_POSSIBILITIES,
        payload:{
            possibilities
        }
    }
}

export function cleanPossibilities() {
    return{
        type: CLEAN_POSSIBILITIES,
        payload:{
            possibilities: []
        }
    }
}