import { PayloadAction } from '@reduxjs/toolkit';
import * as types from './action_types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getLoggeduserInfo } from '.';
// import { loginActions as actions } from '.';

function* getLogin(data: PayloadAction<any>) {
  try {
    const response = yield call(getLogin, data);
    yield put(getLoggeduserInfo(response?.data));
  } catch (e) {
    yield put(getLoggeduserInfo(e));
  }
}

export function* loginSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(types.LOGIN, getLogin);
}
