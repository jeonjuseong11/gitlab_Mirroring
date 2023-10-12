import axios from "axios";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  LOAD_FEEDBACK_FAILURE,
  LOAD_FEEDBACK_REQUEST,
  LOAD_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  REMOVE_FEEDBACK_FAILURE,
  REMOVE_FEEDBACK_REQUEST,
  REMOVE_FEEDBACK_SUCCESS,
  UPDATE_FEEDBACK_COMMENT_REQUEST,
  UPDATE_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_SUCCESS,
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
  return axios.post(`/feedback/post`, data);
};

function* postFeedBack(action) {
  try {
    const result = yield call(postFeedbackAPI, action.data);
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

function removeFeedbackAPI(data) {
  //게시글 삭제
  return axios.delete(`feedback?id=${data.id}`);
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

function updateFeedbackAPI(data) {
  //게시글 수정
  return axios.put(
    `board?title=${data.title}&content=${data.content}&category=${data.category}&id=${data.id}`,
    data
  );
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

function* watchLoadFeedback() {
  yield takeLatest(LOAD_FEEDBACK_REQUEST, loadFeedBack);
}
function* watchPostFeedback() {
  yield takeLatest(POST_FEEDBACK_REQUEST, postFeedBack);
}
function* watchRemoveFeedback() {
  yield takeLatest(REMOVE_FEEDBACK_REQUEST, removeFeedback);
}
function* watchUpdateFeedback() {
  yield takeLatest(UPDATE_FEEDBACK_COMMENT_REQUEST, updateFeedback);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadFeedback),
    fork(watchPostFeedback),
    fork(watchRemoveFeedback),
    fork(watchUpdateFeedback),
  ]);
}
