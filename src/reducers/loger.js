import { UPDATE_LOGERS } from '../constants/Loger'

const initialState = {
    logers: ['пил чай', 'ел булку', 'верстал хедер']
}

export default function loger(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOGERS:
            return {
                ...state,
                logers: action.payload.logers
            }

        default:
            return state;
    }
}