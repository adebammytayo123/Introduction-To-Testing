import React, { useState } from "react";

const Editor = () => {
  const [isSaving, setIsSaving] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSaving(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" type="text" />
      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" type="text" />
      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" type="text" />
      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  );
};

export { Editor };
