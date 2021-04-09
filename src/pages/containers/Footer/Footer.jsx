import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer" id="Contacts">
      <div className="content-footer">
        <div className="text-box-footer">
          <h3 className="title-footer">СВЯЖИТЕСЬ С НАМИ</h3>
          <p className="p-contacts">
            Пишите {" "}
            <a
              href="mailto:kolonya@gmail.com"
              className="link-footer"
              target="_blank"
              rel="noreferrer"
            >
              kolonya@gmail.com
            </a>
          </p>
          <p className="p-contacts">
            Звоните {" "}
            <a href="tel:(+998) 90 505-01-55" className="link-footer">
              (+998) 90 505-01-55
            </a>
          </p>
          <p className="p-contacts">
            <a
              href="https://www.instagram.com/istanbulkolonyasi/"
              target="_blank"
              rel="noreferrer"
              className="link-footer"
            >
              <InstagramIcon /> istanbulkolonyasi
            </a>
          </p>
          <p className="p-contacts">
            <a
              href="https://web.telegram.org/#/im?p=@istanbulkolonyasi"
              target="_blank"
              rel="noreferrer"
              className="link-footer"
            >
              <TelegramIcon /> @istanbulkolonyasi
            </a>
          </p>
        </div>
        <img
          src={
            "https://images.unsplash.com/photo-1582789760972-c8916cebe649?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
          }
          alt="lemons in water"
          className="img-footer"
        />
      </div>
      <p className="meta-footer">© 2021 ISTANBUL KOLONYASI</p>
    </div>
  );
};

export default Footer;
