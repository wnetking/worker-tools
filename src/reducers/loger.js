import { UPDATE_LOGERS } from '../constants/Loger'

const data = [
    {
        date: '13.04.17',
        time: '12:10:50',
        content: 'пил чай'
    },
    {
        date: '13.04.17',
        time: '12:10:55',
        content: 'ел чай'
    },
    {
        date: '13.04.17',
        time: '12:10:59',
        content: 'чай'
    }
]

const initialState = {
    logers: JSON.parse(localStorage.getItem('logers')) === null ? data : JSON.parse(localStorage.getItem('logers'))
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