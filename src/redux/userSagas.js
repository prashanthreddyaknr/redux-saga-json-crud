import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call
} from "redux-saga/effects"
import { createUserError, createUserSuccess, loadUsersError, loadUsersSuccess } from "./actions"

import * as types from "./actionTypes"
import { createUserApi, loadUsersApi } from "./api"

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

export function* onLoadUsersStartAsync() {
    try{
        const response = yield call(loadUsersApi)
        // console.log('The resp is : ', response.status)
        if(response.status === 200){
            yield delay(500)
            yield put(loadUsersSuccess(response.data))
        }
    } catch(error){
        yield put(loadUsersError(error))
    }
}

export function* onCreateUserStartAsync({payload}) {
    try{
        const response = yield call(createUserApi, payload)
        console.log('The resp is : ', response.status)
        if(response.status === 200){
            yield delay(500)
            yield put(createUserSuccess())
        }
    } catch(error){
        yield put(createUserError(error))
    }
}

const userSagas = [
    fork(onLoadUsers), fork(onCreateUser)
]

export default function* rootSaga() {
    yield all([...userSagas])
}