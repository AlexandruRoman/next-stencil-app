import { action } from 'typesafe-actions'
import { routeConstants } from './types'

export const gotoHome = () => action(routeConstants.ROUTE_HOME)
export const gotoUser = (id: string) => action(routeConstants.ROUTE_USER, { id })