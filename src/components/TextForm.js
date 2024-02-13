import React from "react";

export default function TextForm(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="box" rows="10"></textarea>
      </div>
      <button type="button" className="btn btn-primary">
        Change To UpperCase
      </button>
    </>
  );
}
