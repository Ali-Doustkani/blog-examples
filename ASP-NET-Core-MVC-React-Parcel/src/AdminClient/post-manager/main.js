import "./main.css";
import React, { useEffect, useReducer } from "react";
import Editor from "./editor/editor";
import PostList from "./post-list/post-list";
import { initial, reducer } from "./state";
import { getPostItems, saveChanges, newPost } from "./services";

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    (async () => dispatch({ type: "START", posts: await getPostItems() }))();
  }, []);

  const showPost = async id =>
    dispatch({ type: "SHOW_POST", post: state.posts.find(x => x.id === id) });

  const addPost = () => dispatch({ type: "SHOW_POST", post: newPost() });

  const saveEdit = async post => {
    const saveResult = await saveChanges(post);
    dispatch({ type: "SAVE_DONE", saveResult });
  };

  const cancelEdit = () => dispatch({ type: "CANCEL_EDIT" });

  return state.page === "POST_LIST" ? (
    <PostList posts={state.posts} onSelected={showPost} onAddNew={addPost} />
  ) : state.page === "POST" ? (
    <Editor post={state.currentPost} onSave={saveEdit} onCancel={cancelEdit} />
  ) : null;
};

export default Main;
