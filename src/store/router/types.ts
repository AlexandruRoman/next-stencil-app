import { LocationState } from 'redux-first-router'

export interface RouterState {
    readonly location: LocationState
}

export const routeConstants = {
    ROUTE_HOME: 'route/ROUTE_HOME',
    ROUTE_USER: 'route/ROUTE_USER'
}

export const appRoutes = {
    [routeConstants.ROUTE_HOME]: '/',
    [routeConstants.ROUTE_USER]: '/user/:id',
}