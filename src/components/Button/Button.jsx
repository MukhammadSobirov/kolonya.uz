import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { text, action } = props;
  return (
    <button className="btn" onClick={action}>
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
