'use client'
import React from 'react';
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [smallDescription, setSmallDescription] = useState("");
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty()
  );
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSmallDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSmallDescription(event.target.value);
  };

  const handleEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("smallDescription", smallDescription);
    formData.append(
      "content",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
    if (file) {
      formData.append("img", file);
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      setTitle("");
      setSmallDescription("");
      setEditorState(EditorState.createEmpty());
      setFile(null);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error as string);
    }
    
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-4">Create a New Post</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label htmlFor="title" className="text-lg font-semibold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="border-2 border-gray-400 px-2 py-1 mb-4"
        />
        <label htmlFor="smallDescription" className="text-lg font-semibold mb-2">
          Small Description:
        </label>
        <textarea
          id="smallDescription"
          value={smallDescription}
          onChange={handleSmallDescriptionChange}
          className="border-2 border-gray-400 px-2 py-1 mb-4"
        />
        <label htmlFor="content" className="text-lg font-semibold mb-2">
          Content:
        </label>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorStateChange}
          wrapperClassName="border-2 border-gray-400 px-2 py-1 mb-4"
        />
        <label htmlFor="img" className="text-lg font-semibold mb-2">
          Image (optional):
        </label>
        <input type="file" id="img" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
  
}
export default CreatePostPage 