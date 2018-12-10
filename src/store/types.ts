import { RouterState } from './router/types'
import { ModalsState } from './modals/types'

export interface ApplicationState {
    readonly router: RouterState
    readonly modals: ModalsState
}