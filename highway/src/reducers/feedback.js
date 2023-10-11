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
  LOAD_FEEDBACK_COMMENT_FAILURE,
  LOAD_FEEDBACK_COMMENT_REQUEST,
  LOAD_FEEDBACK_COMMENT_SUCCESS,
  POST_FEEDBACK_COMMENT_FAILURE,
  POST_FEEDBACK_COMMENT_REQUEST,
  POST_FEEDBACK_COMMENT_SUCCESS,
  UPDATE_FEEDBACK_COMMENT_FAILURE,
  UPDATE_FEEDBACK_COMMENT_REQUEST,
  UPDATE_FEEDBACK_COMMENT_SUCCESS,
  REMOVE_FEEDBACK_COMMENT_FAILURE,
  REMOVE_FEEDBACK_COMMENT_REQUEST,
  REMOVE_FEEDBACK_COMMENT_SUCCESS,
} from "../constants/actionTypes";
import { error, success } from "../utils/Message";

export const initialState = {
  feedbacks: [],
  feedbackPosts: [],
  feedbackComments: [],
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
  feedbackCommnetLoadLoading: false, // 피드백 댓글 정보
  feedbackCommnetLoadDone: false,
  feedbackCommnetLoadError: null,
  feedbackCommnetPostLoading: false, // 피드백 댓글 작성
  feedbackCommnetPostDone: false,
  feedbackCommnetPostError: null,
  feedbackCommnetUpdateLoading: false, // 피드백 댓글 수정
  feedbackCommnetUpdateDone: false,
  feedbackCommnetUpdateError: null,
  feedbackCommnetRemoveLoading: false, // 피드백 댓글 삭제
  feedbackCommnetRemoveDone: false,
  feedbackCommnetRemoveError: null,
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
      //
      case LOAD_FEEDBACK_COMMENT_REQUEST:
        draft.feedbackLoadLoading = true;
        draft.feedbackLoadError = null;
        draft.feedbackLoadDone = false;
        break;
      case LOAD_FEEDBACK_COMMENT_SUCCESS:
        draft.feedbackCommnetLoadLoading = false;
        draft.feedbacks = action.data;
        draft.feedbackCommnetLoadDone = true;
        break;
      case LOAD_FEEDBACK_COMMENT_FAILURE:
        draft.feedbackCommnetLoadLoading = false;
        draft.feedbackCommnetLoadError = action.error;
        error("피드백 리스트를 불러오지 못했습니다");
        break;
      case POST_FEEDBACK_COMMENT_REQUEST:
        draft.feedbackCommnetPostLoading = true;
        draft.feedbackCommnetPostError = null;
        draft.feedbackCommnetPostDone = false;
        break;
      case POST_FEEDBACK_COMMENT_SUCCESS:
        draft.feedbackPostLoading = false;
        draft.feedbackPosts = action.data;
        draft.feedbackPosts.unshift(action.data);
        draft.feedbackCommnetPostDone = true;
        break;
      case POST_FEEDBACK_COMMENT_FAILURE:
        draft.feedbackCommnetPostLoading = false;
        draft.feedbackCommnetPostDone = true;
        draft.feedbackCommnetLoadError = action.error;
        break;
      case UPDATE_FEEDBACK_COMMENT_REQUEST:
        draft.feedbackCommnetUpdateLoading = true;
        draft.feedbackCommnetUpdateDone = false;
        draft.feedbackCommnetUpdateError = null;
        break;
      case UPDATE_FEEDBACK_COMMENT_SUCCESS:
        draft.feedbackCommnetUpdateLoading = false;
        draft.feedbackCommnetUpdateDone = true;
        break;
      case UPDATE_FEEDBACK_COMMENT_FAILURE:
        draft.feedbackCommnetUpdateLoading = false;
        draft.feedbackCommnetUpdateError = action.error;
        break;
      case REMOVE_FEEDBACK_COMMENT_REQUEST:
        draft.feedbackCommnetRemoveLoading = true;
        draft.feedbackCommnetRemoveDone = false;
        draft.feedbackCommnetRemoveError = null;
        break;
      case REMOVE_FEEDBACK_COMMENT_SUCCESS:
        draft.feedbackCommnetRemoveLoading = false;
        draft.feedbackCommnetRemoveDone = true;
        draft.mainPosts = draft.feedbackPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_FEEDBACK_COMMENT_FAILURE:
        draft.feedbackCommnetRemoveLoading = false;
        draft.feedbackCommnetRemoveError = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
