import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { text } = props;
  const handleClick = () => {
    window.location.href = "#Contacts";
  };
  return (
    <button onClick={handleClick} className="btn" >
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
};

export default Button;
