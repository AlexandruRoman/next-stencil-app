import * as rfr from 'redux-first-router'
import { appRoutes } from './types'

const {
    reducer,
    middleware,
    enhancer
} = rfr.connectRoutes(appRoutes)

export {
    reducer,
    middleware,
    enhancer
}
