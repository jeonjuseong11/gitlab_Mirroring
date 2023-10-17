import { produce } from "immer";
import {
  LOAD_FEEDBACK_FAILURE,
  LOAD_FEEDBACK_REQUEST,
  LOAD_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  UPDATE_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_REQUEST,
  UPDATE_FEEDBACK_SUCCESS,
  REMOVE_FEEDBACK_FAILURE,
  REMOVE_FEEDBACK_REQUEST,
  REMOVE_FEEDBACK_SUCCESS,
} from "../constants/actionTypes";
import { error, success } from "../utils/Message";

export const initialState = {
  feedbacks: [],
  feedbackPosts: [],
  feedbackLoadLoading: false, // 피드백 리스트 정보
  feedbackLoadDone: false,
  feedbackLoadError: null,
  feedbackPostLoading: false, // 피드백 작성
  feedbackPostDone: false,
  feedbackPostError: null,
  feedbackUpdateLoading: false, // 피드백 수정
  feedbackUpdateDone: false,
  feedbackUpdateError: null,
  feedbackRemoveLoading: false, // 피드백 삭제
  feedbackRemoveDone: false,
  feedbackRemoveError: null,
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
      case POST_FEEDBACK_REQUEST:
        draft.feedbackPostLoading = true;
        draft.feedbackPostError = null;
        draft.feedbackLoadDone = false;
        break;
      case POST_FEEDBACK_SUCCESS:
        draft.feedbackPostLoading = false;
        draft.feedbackPosts = action.data;
        draft.feedbackPosts.unshift(action.data);
        draft.feedbackPostDone = true;
        break;
      case POST_FEEDBACK_FAILURE:
        draft.feedbackPostLoading = false;
        draft.feedbackPostDone = true;
        draft.feedbackLoadError = action.error;
        break;
      case UPDATE_FEEDBACK_REQUEST:
        draft.feedbackUpdateLoading = true;
        draft.feedbackUpdateDone = false;
        draft.feedbackUpdateError = null;
        break;
      case UPDATE_FEEDBACK_SUCCESS:
        draft.feedbackUpdateLoading = false;
        draft.feedbackUpdateDone = true;
        break;
      case UPDATE_FEEDBACK_FAILURE:
        draft.feedbackUpdateLoading = false;
        draft.feedbackUpdateError = action.error;
        break;
      case REMOVE_FEEDBACK_REQUEST:
        draft.feedbackRemoveLoading = true;
        draft.feedbackRemoveDone = false;
        draft.feedbackRemoveError = null;
        break;
      case REMOVE_FEEDBACK_SUCCESS:
        draft.feedbackRemoveLoading = false;
        draft.feedbackRemoveDone = true;
        draft.mainPosts = draft.feedbackPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_FEEDBACK_FAILURE:
        draft.feedbackRemoveLoading = false;
        draft.feedbackRemoveError = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
