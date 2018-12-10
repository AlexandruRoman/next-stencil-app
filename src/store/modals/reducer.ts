import { Reducer } from 'redux'
import { ModalsActionTypes, ModalsState } from './types'

const initialState: ModalsState = {
    id: ''
}

const reducer: Reducer<ModalsState> = (state = initialState, action) => {
    switch (action.type) {
        case ModalsActionTypes.SET: {
            return { ...state, id: action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer