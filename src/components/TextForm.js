import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("Enter the text here!");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="box"
            rows="10"
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={upperCase}
        >
          Change To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={lowerCase}
        >
          Change To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
