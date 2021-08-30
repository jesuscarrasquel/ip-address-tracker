/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
    usuarios: undefined
}

export default (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case 'traer_usuarios':
            return {...state, usuarios: action.payload }
            
        default: return state;
    }
}