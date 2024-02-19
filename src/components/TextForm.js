import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Can't change to UpperCase text is empty!!", "warning");
    } else {
      props.showAlert("Converted to UpperCase", "success");
    }
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Can't change to LowerCase text is empty!!", "warning");
    } else {
      props.showAlert("Converted to LowerCase", "success");
    }
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    if (text === "") {
      props.showAlert("No Data found to clear !!", "warning");
    } else {
      props.showAlert("Data deleted successfully", "success");
    }
  };

  const copyText = () => {
    const text = document.querySelector("#box");
    text.select();
    navigator.clipboard.writeText(text.value);
    if (text === "") {
      props.showAlert("No Data found to copy !!", "warning"); // Not working
    } else {
      props.showAlert("All the Text copied!", "success");
    }
  };

  function removeSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    if (text === "") {
      props.showAlert("No Data found for Space Remove !!", "warning");
    } else {
      props.showAlert("All the extra spaces removed successfully ", "success");
    }
  }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="box"
            rows="10"
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "light" : "light",
              color: props.mode === "dark" ? "black" : "black",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={upperCase}
        >
          Change To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2  my-1"
          onClick={lowerCase}
        >
          Change To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1 "
          onClick={removeSpace}
        >
          Remove Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text-box above to preview it here "}
        </p>
      </div>
    </>
  );
}
