import { combineReducers } from "redux";

import user from "./user";
import school from "./school";
import post from "./post";
import feedback from "./feedback";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  user,
  school,
  post,
  feedback,
});

export default rootReducer;
