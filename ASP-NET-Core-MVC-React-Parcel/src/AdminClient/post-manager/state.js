const initial = {
  page: null,
  posts: [],
  currentPost: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        page: "POST_LIST",
        posts: action.posts
      };
    case "SHOW_POST":
      return {
        ...state,
        page: "POST",
        currentPost: action.post
      };
    case "SAVE_DONE":
      return {
        ...state,
        page: "POST_LIST",
        posts:
          action.saveResult.type === "update"
            ? state.posts.map(p =>
                p.id === action.saveResult.post.id ? action.saveResult.post : p
              )
            : [...state.posts, action.saveResult.post]
      };
    case "CANCEL_EDIT":
      return { ...state, page: "POST_LIST", currentPost: null };
  }
};

export { initial, reducer };
