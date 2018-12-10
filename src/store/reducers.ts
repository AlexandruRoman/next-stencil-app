import { combineReducers } from 'redux'

import { ApplicationState } from './types'
import routerReducer from './router/reducer'
import modalsReducer from './modals/reducer'

const rootReducer = combineReducers<ApplicationState>({
  router: routerReducer,
  modals: modalsReducer
});

export default rootReducer;