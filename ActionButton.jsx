// ActionButton.js

import React from "react";

const ActionButton = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;
