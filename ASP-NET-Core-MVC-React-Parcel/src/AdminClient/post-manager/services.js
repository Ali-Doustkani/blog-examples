const getPostItems = async () => {
  const response = await fetch("/api/post");
  return await response.json();
};

const saveChanges = async post => {
  const response = await fetch("/api/post", {
    method: "put",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.status === 201) {
    post.id = (await response.json()).id;
    return { type: "add", post };
  } else if (response.status === 200) {
    return { type: "update", post };
  } else {
    throw new Error(response.statusText);
  }
};

const newPost = () => ({ id: 0, title: "", tags: "", content: "" });

export { getPostItems, saveChanges, newPost };
