import { produce } from "immer";
import {
  LOAD_FEEDBACK_FAILURE,
  LOAD_FEEDBACK_REQUEST,
  LOAD_FEEDBACK_SUCCESS,
} from "../constants/actionTypes";
import { error, success } from "../utils/Message";

export const initialState = {
  feedbacks: [],
  feedbackLoadLoading: false, // 피드백 리스트 정보
  feedbackLoadDone: false,
  feedbackLoadError: null,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_FEEDBACK_REQUEST:
        draft.feedbackLoadLoading = true;
        draft.feedbackLoadError = null;
        draft.feedbackLoadDone = false;
        break;
      case LOAD_FEEDBACK_SUCCESS:
        draft.feedbackLoadLoading = false;
        draft.feedbacks = action.data;
        draft.feedbackLoadDone = true;
        break;
      case LOAD_FEEDBACK_FAILURE:
        draft.feedbackLoadLoading = false;
        draft.feedbackLoadError = action.error;
        error("피드백 리스트를 불러오지 못했습니다");
        break;
      default:
        return state;
    }
  });

export default reducer;
