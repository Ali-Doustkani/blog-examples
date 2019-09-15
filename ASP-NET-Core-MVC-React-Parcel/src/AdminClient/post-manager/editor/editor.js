import "./editor.css";
import React, { useRef } from "react";

const Editor = ({ post, onSave, onCancel }) => {
  const titleRef = useRef();
  const tagsRef = useRef();
  const contentRef = useRef();

  const save = e => {
    e.preventDefault();
    onSave({
      id: post.id,
      title: titleRef.current.value,
      tags: tagsRef.current.value,
      content: contentRef.current.value
    });
  };

  const cancel = e => {
    e.preventDefault();
    onCancel();
  };

  return (
    <div className="form-container">
      <h1>Enter Post</h1>
      <form>
        <div className="control-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            defaultValue={post.title}
            ref={titleRef}
            placeholder="Enter the post title"
            autoFocus
          />
        </div>
        <div className="control-group">
          <label htmlFor="tags">Tags</label>
          <input id="tags" defaultValue={post.tags} ref={tagsRef} />
        </div>
        <div className="control-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" defaultValue={post.content} ref={contentRef} />
        </div>
        <button onClick={save}>Save</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Editor;
