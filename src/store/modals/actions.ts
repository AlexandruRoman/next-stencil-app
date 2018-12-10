import { action } from 'typesafe-actions'
import { ModalsActionTypes } from './types'

export const set = (id: string) => action(ModalsActionTypes.SET, id)
export const close = () => action(ModalsActionTypes.SET, '')
