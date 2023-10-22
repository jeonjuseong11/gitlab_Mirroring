import produce from "immer";
import {
  ADD_POST_COMMENT_FAILURE,
  ADD_POST_COMMENT_REQUEST,
  ADD_POST_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_TAG_POSTS_FAILURE,
  LOAD_TAG_POSTS_REQUEST,
  LOAD_TAG_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  REMOVE_IMAGE,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  LOAD_POST_COMMENTS_FAILURE,
  LOAD_POST_COMMENTS_REQUEST,
  LOAD_POST_COMMENTS_SUCCESS,
  UPDATE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_SUCCESS,
  UPDATE_POST_COMMENT_FAILURE,
  REMOVE_POST_COMMENT_REQUEST,
  REMOVE_POST_COMMENT_SUCCESS,
  REMOVE_POST_COMMENT_FAILURE,
  ADD_POST_COMMENT_REPLY_FAILURE,
  ADD_POST_COMMENT_REPLY_REQUEST,
  ADD_POST_COMMENT_REPLY_SUCCESS,
  LOAD_WROTE_POSTS_REQUEST,
  LOAD_WROTE_POSTS_SUCCESS,
  LOAD_WROTE_POSTS_FAILURE,
  SET_IMAGES_REQUEST,
} from "../constants/actionTypes";

export const initialState = {
  imagePaths: [], //이미지 파일 관리
  schoolBoardPosts: [], //게시글 리스트
  schoolBoardPost: null, //단일 게시글
  schoolBoardPostComments: [], // 게시글 댓글
  wrotePosts: [], // 내가 작성한 게시글
  loadPostsLoading: false, //게시글 리스트
  loadPostsDone: false,
  loadPostsError: null,
  loadWrotePostsLoading: false, //내가 작성한 게시글
  loadWrotePostsDone: false,
  loadWrotePostsError: null,
  loadPostLoading: false, //단일 게시글
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false, //게시글 작성
  addPostDone: false,
  addPostError: null,
  likePostLoading: false, //게시글 좋아요
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false, //게시글 좋아요 취소
  unlikePostDone: false,
  unlikePostError: null,
  updatePostLoading: false, //게시글 수정
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false, //게시글 삭제
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false, //게시글 댓글
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false, //이미지 업로드
  uploadImagesDone: false,
  uploadImagesError: null,
  loadPostCommentsLoading: false, // 게시판 댓글 조회
  loadPostCommentsDone: false,
  loadPostCommentsError: false,
  updatePostCommentLoading: false, // 게시판 댓글 수정
  updatePostCommentDone: false,
  updatePostCommentError: false,
  removePostCommentLoading: false, // 게시판 댓글 삭제
  removePostCommentDone: false,
  removePostCommentError: false,
  addPostCommentReplyLoading: false, //게시글 대댓글 추가
  addPostCommentReplyDone: false,
  addPostCommentReplyError: null,
  Likers: [],
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = [...draft.imagePaths, action.data];
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case SET_IMAGES_REQUEST:
        draft.imagePaths = action.data;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: {
        draft.Likers.push(action.data);
        draft.schoolBoardPost.boardHeartInfo.push(action.data);
        draft.likePostLoading = false;
        draft.likePostDone = true;
        draft.schoolBoardPost.heartCount = draft.schoolBoardPost.heartCount + 1;
        break;
      }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case UNLIKE_POST_SUCCESS: {
        draft.Likers = draft.Likers.filter((liker) => liker.heartId !== action.data.heartId);
        draft.schoolBoardPost.boardHeartInfo = draft.schoolBoardPost.boardHeartInfo.filter(
          (liker) => liker.heartId !== action.data.heartId
        );
        draft.schoolBoardPost.heartCount = draft.schoolBoardPost.heartCount - 1;
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.schoolBoardPost = action.data;
        draft.imagePaths = action.data.imageUrls;
        draft.Likers = action.data ? action.data.boardHeartInfo : null;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_POSTS_REQUEST:
      case LOAD_TAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_TAG_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.schoolBoardPosts = action.data;
        draft.schoolBoardPost = null;
        // draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_TAG_POSTS_FAILURE:
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.schoolBoardPost = action.data;
        draft.schoolBoardPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.schoolBoardPosts.filter((v) => v.id !== action.data.PostId);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_POST_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_POST_COMMENT_SUCCESS: {
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        draft.schoolBoardPostComments.unshift(action.data.data);
        break;
      }
      case ADD_POST_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case ADD_POST_COMMENT_REPLY_REQUEST:
        draft.addPostCommentReplyLoading = true;
        draft.addPostCommentReplyDone = false;
        draft.addPostCommentReplyError = null;
        break;
      case ADD_POST_COMMENT_REPLY_SUCCESS: {
        draft.addPostCommentReplyLoading = false;
        draft.addPostCommentReplyDone = true;
        draft.schoolBoardPostComments = draft.schoolBoardPostComments.map((comment) => {
          if (comment.id === action.data.data.parentId) {
            return {
              ...comment,
              children: [...comment.children, action.data.data],
            };
          }
          return comment;
        });
        break;
      }
      case ADD_POST_COMMENT_REPLY_FAILURE:
        draft.addPostCommentReplyLoading = false;
        draft.addPostCommentReplyError = action.error;
        break;
      case LOAD_POST_COMMENTS_REQUEST:
        draft.loadPostCommentsLoading = true;
        draft.loadPostCommentsDone = false;
        draft.loadPostCommentsError = null;
        break;
      case LOAD_POST_COMMENTS_SUCCESS: {
        draft.schoolBoardPostComments = action.data;
        draft.loadPostCommentsLoading = false;
        draft.loadPostCommentsDone = true;
        break;
      }
      case LOAD_POST_COMMENTS_FAILURE:
        draft.loadPostCommentsLoading = false;
        draft.loadPostCommentsError = action.error;
        break;
      case UPDATE_POST_COMMENT_REQUEST:
        draft.updatePostCommentLoading = true;
        draft.updatePostCommentDone = false;
        draft.updatePostCommentError = null;
        break;
      case UPDATE_POST_COMMENT_SUCCESS:
        draft.updatePostCommentLoading = false;
        draft.updatePostCommentDone = true;
        const comment = draft.schoolBoardPostComments.find(
          (comment) => comment.id === action.data.id
        );

        if (comment) {
          comment.content = action.data.content;
          comment.modifiedDate = action.data.modifiedDate;
        } else {
          for (const otherComment of draft.schoolBoardPostComments) {
            const reply = otherComment.children.find((reply) => reply.id === action.data.id);
            if (reply) {
              reply.content = action.data.content;
              reply.modifiedDate = action.data.modifiedDate;
              break;
            }
          }
        }
        break;
      case UPDATE_POST_COMMENT_FAILURE:
        draft.updatePostCommentLoading = false;
        draft.updatePostCommentError = action.error;
        break;
      case REMOVE_POST_COMMENT_REQUEST:
        draft.removePostCommentLoading = true;
        draft.removePostCommentDone = false;
        draft.removePostCommentError = null;
        break;
      case REMOVE_POST_COMMENT_SUCCESS:
        draft.removePostCommentLoading = false;
        draft.removePostCommentDone = true;

        const commentIdToDelete = action.data; // 삭제할 댓글 또는 대댓글의 ID

        const recursiveUpdate = (comments) =>
          comments.map((comment) => ({
            ...comment,
            ...(comment.id === commentIdToDelete && { isDeleted: true }),
            ...(comment.children && {
              children: recursiveUpdate(comment.children),
            }),
          }));

        draft.schoolBoardPostComments = recursiveUpdate(draft.schoolBoardPostComments);
        break;
      case REMOVE_POST_COMMENT_FAILURE:
        draft.removePostCommentLoading = false;
        draft.removePostCommentError = action.error;
        break;
      case LOAD_WROTE_POSTS_REQUEST:
        draft.loadWrotePostsLoading = true;
        draft.loadWrotePostsDone = false;
        draft.loadWrotePostsError = null;
        break;
      case LOAD_WROTE_POSTS_SUCCESS: {
        draft.wrotePosts = action.data;
        draft.loadWrotePostsLoading = false;
        draft.loadWrotePostsDone = true;
        break;
      }
      case LOAD_WROTE_POSTS_FAILURE:
        draft.loadWrotePostsLoading = false;
        draft.loadWrotePostsError = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
