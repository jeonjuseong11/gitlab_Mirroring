import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import schoolSaga from "./school";
import postSaga from "./post";
import feedbackSaga from "./feedback";

axios.defaults.baseURL =
  "http://highway-lb-1879269947.ap-northeast-2.elb.amazonaws.com/";
// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axios.defaults.withCredentials = true;
export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(schoolSaga),
    fork(postSaga),
    fork(feedbackSaga),
  ]);
}
