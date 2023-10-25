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
  LOAD_FEEDBACK_LIST_REQUEST,
  LOAD_FEEDBACK_LIST_SUCCESS,
  LOAD_FEEDBACK_LIST_FAILURE,
  REMOVE_FEEDBACK_SUCCESS,
  REMOVE_FEEDBACK_REQUEST,
  REMOVE_FEEDBACK_FAILURE,
} from "../constants/actionTypes";
import { error, success } from "../utils/Message";

export const initialState = {
  feedbackList: [], // 피드백 리스트
  feedback: [], // 피드백 단일
  feedbackListLoadLoading: false, // 피드백 리스트
  feedbackListLoadDone: false,
  feedbackListLoadError: null,
  feedbackLoadLoading: false, // 단일 피드백
  feedbackLoadDone: false,
  feedbackLoadError: null,
  feedbackPostLoading: false, // 피드백 작성
  feedbackPostDone: false,
  feedbackPostError: null,
  feedbackUpdateLoading: false, // 피드백 수정/답변
  feedbackUpdateDone: false,
  feedbackUpdateError: null,
  feedbackRemoveLoading: false, // 피드백 삭제
  feedbackRemoveDone: false,
  feedbackRemoveError: null,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_FEEDBACK_LIST_REQUEST:
        draft.feedbackListLoadLoading = true;
        draft.feedbackListLoadError = null;
        draft.feedbackListLoadDone = false;
        break;
      case LOAD_FEEDBACK_LIST_SUCCESS:
        draft.feedbackListLoadLoading = false;
        draft.feedbackList = action.data;
        draft.feedbackListLoadDone = true;
        break;
      case LOAD_FEEDBACK_LIST_FAILURE:
        draft.feedbackListLoadLoading = false;
        draft.feedbackListLoadError = action.error;
        error("피드백 리스트를 불러오지 못했습니다");
        break;
      case LOAD_FEEDBACK_REQUEST:
        draft.feedbackLoadLoading = true;
        draft.feedbackLoadError = null;
        draft.feedbackLoadDone = false;
        break;
      case LOAD_FEEDBACK_SUCCESS:
        draft.feedbackLoadLoading = false;
        draft.feedback = action.data;
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
