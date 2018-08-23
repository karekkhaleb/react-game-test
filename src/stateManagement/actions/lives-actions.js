export const ADD_LIFE = 'add_life';
export const LIVES_LOST = 'lives_lost';

export function removeLives(newLifeAmount) {
    return{
        type: LIVES_LOST,
        payload:{
            life: newLifeAmount
        }
    }
}

export function addLife(lifeAmount) {
    return{
        type: ADD_LIFE,
        payload:{
            life: lifeAmount
        }
    }
}