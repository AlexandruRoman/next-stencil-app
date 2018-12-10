import { fork } from 'redux-saga/effects'

import auth from './auth/sagas'

export function* sagas() {
    yield fork(auth)
}
