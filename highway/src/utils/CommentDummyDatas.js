export const CommentDummyDatas = {
  data: [
    {
      id: 204,
      content: "댓글1",
      userId: "Lee",
      parentId: null,
      isDeleted: null,
      children: [
        {
          id: 205,
          content: "대댓글1",
          userId: "admin",
          parentId: 204,
          isDeleted: null,
          children: [],
          createDate: "2023-06-14T00:11:42.156587",
          modifiedDate: "2023-06-14T00:11:42.156587",
        },
        {
          id: 211,
          content: "대댓글1-2",
          userId: "admin",
          parentId: 204,
          isDeleted: null,
          children: [],
          createDate: "2023-06-14T02:19:16.942642",
          modifiedDate: "2023-06-14T02:19:16.942642",
        },
        {
          id: 212,
          content: "대댓글1-3",
          userId: "Lee",
          parentId: 204,
          isDeleted: null,
          children: [],
          createDate: "2023-06-14T02:36:16.797816",
          modifiedDate: "2023-06-14T02:36:16.797816",
        },
      ],
      createDate: "2023-06-14T00:11:13.905074",
      modifiedDate: "2023-06-14T02:35:25.955324",
    },
    {
      id: 206,
      content: "댓글2",
      userId: "Lee",
      parentId: null,
      isDeleted: null,
      children: [
        {
          id: 207,
          content: "대댓글2",
          userId: "admin",
          parentId: 206,
          isDeleted: null,
          children: [],
          createDate: "2023-06-14T00:21:46.499688",
          modifiedDate: "2023-06-14T00:21:46.499688",
        },
      ],
      createDate: "2023-06-14T00:20:59.959583",
      modifiedDate: "2023-06-14T02:35:25.994333",
    },
    {
      id: 208,
      content: "댓글3",
      userId: "Lee",
      parentId: null,
      isDeleted: null,
      children: [],
      createDate: "2023-06-14T01:11:52.65487",
      modifiedDate: "2023-06-14T02:37:23.491062",
    },
    {
      id: 213,
      content: "댓글4",
      userId: "admin",
      parentId: null,
      isDeleted: null,
      children: [],
      createDate: "2023-06-14T02:36:36.84181",
      modifiedDate: "2023-06-14T02:37:20.425269",
    },
    {
      id: 214,
      content: "댓글5",
      userId: "admin",
      parentId: null,
      isDeleted: null,
      children: [],
      createDate: "2023-06-14T03:11:14.026934",
      modifiedDate: "2023-06-14T03:11:14.026934",
    },
  ],
};

// export const CommentDummyDatas = {
//   data: [
//   ],
// };

export default CommentDummyDatas;
