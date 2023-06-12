import produce from "immer";
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
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
} from "../constants/actionTypes";

export const initialState = {
  imagePaths: [], //이미지 파일 관리
  schoolBoardPosts: [], //게시글 리스트
  schoolBoardPost: null, //단일 게시글
  schoolBoardPostComments: { data: [] }, // 게시글 댓글
  loadPostsLoading: false, //게시글 리스트
  loadPostsDone: false,
  loadPostsError: null,
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
  addPostLoading: false, //게시글 추가
  addPostDone: false,
  addPostError: null,
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
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: {
        const post = draft.schoolBoardPosts.find(
          (v) => v.id === action.data.PostId
        );
        post.Likers.push({ id: action.data.userId });
        draft.likePostLoading = false;
        draft.likePostDone = true;
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
        const post = draft.schoolBoardPosts.find(
          (v) => v.id === action.data.PostId
        );
        post.Likers = post.Likers.filter((v) => v.id !== action.data.userId);
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
        draft.singlePost = action.data;
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
        draft.schoolBoardPosts = draft.schoolBoardPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
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
        draft.schoolBoardPostComments.find(
          (v) => v.id === action.data.PostId
        ).content = action.data.content;
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
        draft.mainPosts = draft.schoolBoardPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        ///const post = draft.schoolBoardPostComments.find(
        // (v) => v.id === action.data.PostId
        //   (v) => v.id === action.data.boardId // POSTMAN에 나온 주소대로
        // );
        // post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
      case LOAD_POST_COMMENTS_REQUEST:
        draft.loadPostCommentsLoading = true;
        draft.loadPostCommentsDone = false;
        draft.loadPostCommentsError = null;
        break;
      case LOAD_POST_COMMENTS_SUCCESS: {
        console.log(action.data);
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
        // draft.mainPschoolBoardPostsosts.find(
        //   (v) => v.id === action.data.PostId
        // ).content = action.data.content;
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
        draft.mainPosts = draft.schoolBoardPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_POST_COMMENT_FAILURE:
        draft.removePostCommentLoading = false;
        draft.removePostCommentError = action.error;
        break;
    }
  });

export default reducer;
