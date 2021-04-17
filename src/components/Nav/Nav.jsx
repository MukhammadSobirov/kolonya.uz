import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import PublicIcon from '@material-ui/icons/Public';

import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#Home" className="nav-link">
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href="#Contacts" className="nav-link">
            <ContactMailIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/istanbulkolonyasi/"
            target="_blank"
            className="nav-link"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="https://web.telegram.org/#/im?p=@istanbulkolonyasi"
            target="_blank"
            className="nav-link"
            rel="noreferrer"
          >
            <TelegramIcon />
          </a>
        </li>
        {/* <li>
            <p className="nav-link"><PublicIcon /><br />RU</p>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
