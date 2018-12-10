import { fork } from 'redux-saga/effects'

function* init() {
    yield 'init'
}

export default function* root() {
    yield fork(init)
}