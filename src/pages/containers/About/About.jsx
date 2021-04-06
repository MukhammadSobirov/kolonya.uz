import React from "react";

import "./About.css";
import pattern3 from "../../../images/pattern3.svg";

const About = () => {
  return (
    <div className="container-about">
      <div className="content-box-about">
        <p className='paragraph-about'>
          Желая обогатить нашу страну итак знаменитым гостеприимством, красотой
          обычаев и традиций. Мы открываем Kolonya для всего Узбекистана.
        </p>
        <img src={pattern3} alt="pattern" />
      </div>
    </div>
  );
};

export default About;
