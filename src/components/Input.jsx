import React, { useRef, useState } from "react";

import { ReactComponent as IconPlus } from "../icons/SVG/plus-circle.svg";
import "./Input.css";

function Input(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputConfirm = () => {
    let inputValue = inputRef.current.value;
    setInput((prev) => inputValue);
    if (input.trim() !== "")
      props.handleInput({
        title: input,
        isComplete: false,
      });
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleInputConfirm();
  };

  return (
    <div className="input">
      <input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Input to do..."
      />
      <IconPlus
        onClick={handleInputConfirm}
        className="btn_input"
        fill="rgb(0, 128, 240)"
      />
    </div>
  );
}

export default Input;
