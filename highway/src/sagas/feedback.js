import axios from "axios";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  LOAD_FEEDBACK_FAILURE,
  LOAD_FEEDBACK_REQUEST,
  LOAD_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  UPDATE_FEEDBACK_REQUEST,
  UPDATE_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_SUCCESS,
  LOAD_FEEDBACK_LIST_REQUEST,
  LOAD_FEEDBACK_LIST_SUCCESS,
  LOAD_FEEDBACK_LIST_FAILURE,
  REMOVE_FEEDBACK_REQUEST,
  REMOVE_FEEDBACK_SUCCESS,
  REMOVE_FEEDBACK_FAILURE,
} from "../constants/actionTypes";

// feedbackList load
const loadFeedbackListAPI = () => {
  return axios.get(`/feedback/list`);
};

function* loadFeedBackList(action) {
  try {
    const result = yield call(loadFeedbackListAPI, action.data);
    yield put({
      type: LOAD_FEEDBACK_LIST_SUCCESS,
      data: result.data.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_FEEDBACK_LIST_FAILURE,
      data: e.response.data,
    });
    alert(e.response.data);
    localStorage.clear();
  }
}

// 단일 feedback load
const loadFeedbackAPI = (data) => {
  return axios.get(`/feedback/${data.id}`, data);
};

function* loadFeedBack(action) {
  try {
    const result = yield call(loadFeedbackAPI, action.data);
    yield put({
      type: LOAD_FEEDBACK_SUCCESS,
      data: result.data.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_FEEDBACK_FAILURE,
      data: e.response.data,
    });
    alert(e.response.data);
    localStorage.clear();
  }
}

// feedback 작성
const postFeedbackAPI = (data) => {
  return axios.post(`/feedback`, data);
};

function* postFeedBack(action) {
  try {
    const result = yield call(postFeedbackAPI, action.data);
    console.log(action.data);
    yield put({
      type: POST_FEEDBACK_SUCCESS,
      data: result.data.data,
    });

    yield put({
      type: LOAD_FEEDBACK_REQUEST,
      data: action.data.schoolId,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: POST_FEEDBACK_FAILURE,
      error: err.response.data,
    });
  }
}

// 피드백 답변
function updateFeedbackAPI(data) {
  console.log(data);
  return axios.put(`feedback/${data.id}`, data);
}

function* updateFeedback(action) {
  try {
    const result = yield call(updateFeedbackAPI, action.data);
    yield put({
      type: UPDATE_FEEDBACK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_FEEDBACK_FAILURE,
      error: err.response.data,
    });
  }
}

// 피드백 삭제
function removeFeedbackAPI(data) {
  return axios.delete(`feedback/${data.id}`, data);
}

function* removeFeedback(action) {
  try {
    const result = yield call(removeFeedbackAPI, action.data);
    yield put({
      type: REMOVE_FEEDBACK_SUCCESS,
      data: result.data.board.id,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_FEEDBACK_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadFeedbackList() {
  yield takeLatest(LOAD_FEEDBACK_LIST_REQUEST, loadFeedBackList);
}

function* watchLoadFeedback() {
  yield takeLatest(LOAD_FEEDBACK_REQUEST, loadFeedBack);
}
function* watchPostFeedback() {
  yield takeLatest(POST_FEEDBACK_REQUEST, postFeedBack);
}

function* watchUpdateFeedback() {
  yield takeLatest(UPDATE_FEEDBACK_REQUEST, updateFeedback);
}

function* watchRemoveFeedback() {
  yield takeLatest(REMOVE_FEEDBACK_REQUEST, removeFeedback);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadFeedbackList),
    fork(watchLoadFeedback),
    fork(watchPostFeedback),
    fork(watchUpdateFeedback),
    fork(watchRemoveFeedback),
  ]);
}
