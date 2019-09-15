import "./post-list.css";
import React from "react";

const toTags = tagString =>
  tagString
    .split(",")
    .map(x => x.trim())
    .map(x => <span key={x}>{x}</span>);

const PostList = ({ posts, onSelected, onAddNew }) => (
  <div className="item-container">
    <h1>Posts</h1>
    <button onClick={onAddNew}>Add New Post</button>
    <ul>
      {posts.map(item => (
        <li key={item.id} onClick={() => onSelected(item.id)}>
          <div>{item.title}</div>
          <div>{toTags(item.tags)}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
