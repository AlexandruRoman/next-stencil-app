import { combineReducers } from 'redux'
import { reducer as locationReducer } from './router'
import { RouterState } from './types'

const reducer = combineReducers<RouterState>({
    location: locationReducer
});

export default reducer