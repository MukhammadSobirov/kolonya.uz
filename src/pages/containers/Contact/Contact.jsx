import React from "react";
import ContactForm from "../../../components/Form/ContactForm";
import "./Contact.css";



const Contact = () => {
  return (
    <div className="container-contact" id='Contacts'>
    
      <div className="content-box-contact">
        <h3 className='title-contact'>ОСТАВЬТЕ СВОИ КОНТАКТЫ <br />И МЫ ВАМ ПОЗВОНИМ</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
