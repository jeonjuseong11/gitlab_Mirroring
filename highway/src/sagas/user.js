import axios from "axios";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  CHECK_USER_ID_REQUEST,
  CHECK_USER_ID_SUCCESS,
  CHECK_USER_ID_FAILURE,
} from "../constants/actionTypes";

const checkUserIdAPI = (data) => {
  // console.log(data);
  return axios.get(`/user/idCheck?id=${data}`);
};

function* checkUserId(action) {
  try {
    // console.log(action.data);
    const result = yield call(checkUserIdAPI, action.data);
    yield put({
      type: CHECK_USER_ID_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHECK_USER_ID_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchCheckUserId() {
  yield takeLatest(CHECK_USER_ID_REQUEST, checkUserId);
}

export default function* userSaga() {
  yield all([fork(watchCheckUserId)]);
}
