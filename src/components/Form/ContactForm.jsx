import React, { useState } from "react";
import Button from "../Button/Button";

import "./ContactForm.css";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [isError, setError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    switch (name) {
      case name === "name":
        setName(value);
        break;
      case name === "phone":
        setPhone(value);
        break;
      case name === "email":
        setEmail(value);
        break;
      case name === "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className="form-contact">
      <div className="input-div">
        <input
          type="text"
          name="name"
          placeholder="имя"
          required
          onChange={handleChange}
        />
      </div>
      <div className="input-div">
        <input
          type="tel"
          name="phone"
          placeholder="телефон"
          required
          onChange={handleChange}
        />
      </div>
      <div className="input-div">
        <input
          type="email"
          name="email"
          placeholder="электронная почта"
          required
          onChange={handleChange}
        />
      </div>
      <div className="input-div">
        <textarea
          placeholder="комментарий к контактам"
          name="comments"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button text="ОТПРАВИТЬ" />
      </div>
    </form>
  );
};

export default ContactForm;
