import React from "react";

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h2>To-Do List</h2>
      <span>Enter text into the input field to add items to your list.</span>
      <span>Click the "X" to remove the item from your list.</span>
      <span>Click the item to mark it as complete.</span>
    </div>
  );
}

export default Header;
