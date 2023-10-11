import axios from "axios";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  LOAD_FEEDBACK_FAILURE,
  LOAD_FEEDBACK_REQUEST,
  LOAD_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
} from "../constants/actionTypes";

const loadFeedbackAPI = (data) => {
  return axios.get(`/feedback${data.id}`);
};

function* loadFeedBack() {
  try {
    const result = yield call(loadFeedbackAPI);
    yield put({
      type: LOAD_FEEDBACK_SUCCESS,
      data: result.data.data,
    });
    // console.log(result.data);
  } catch (e) {
    yield put({
      type: LOAD_FEEDBACK_FAILURE,
      data: e.response.data,
    });
    alert(e.response.data);
    localStorage.clear();
  }
}
const postFeedbackAPI = (data) => {
  return axios.post(`/feedback`, data);
};

function* postFeedBack() {
  try {
    const result = yield call(postFeedbackAPI);
    yield put({
      type: POST_FEEDBACK_SUCCESS,
      data: result.data.data,
    });
    // console.log(result.data);
  } catch (e) {
    yield put({
      type: POST_FEEDBACK_FAILURE,
      data: e.response.data,
    });
    alert(e.response.data);
    localStorage.clear();
  }
}

function* watchLoadFeedback() {
  yield takeLatest(LOAD_FEEDBACK_REQUEST, loadFeedBack);
}
function* watchPostFeedback() {
  yield takeLatest(POST_FEEDBACK_REQUEST, postFeedBack);
}

export default function* userSaga() {
  yield all([fork(watchLoadFeedback), fork(watchPostFeedback)]);
}
