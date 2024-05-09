import React, { useState } from "react";

export const Post = () => {
  const [formData, setFormData] = useState({
    categoryId: "",
    content: "",
    title: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryId">Category ID:</label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">Choose File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Post;
