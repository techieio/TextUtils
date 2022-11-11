import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "#042743",
        marginTop: "20px",
      }}
    >
      <h1 className="text-center">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8 "
          style={{
            backgroundColor: props.mode === "dark" ? "#13466E" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
            marginTop: "20px",
            marginBottom: "17px",
          }}
        ></textarea>

        <button
          disabled={text.length == 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length == 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length == 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length == 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
      <h3 style={{marginTop: '50px', marginBottom: '13px'}}>{props.title}</h3>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
      </div>
    </div>
  );
}
