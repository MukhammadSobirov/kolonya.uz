import React from "react";

import "./History.css";
import otoman from "../../../images/otoman.jpg";
import logo from "../../../images/logo.png";
import roman from "../../../images/roman.jpg";
import pattern1 from "../../../images/pattern1.svg";
import pattern2 from "../../../images/pattern2.svg";

const History = () => {
  return (
    <div className="container-history">
      <div className="text-box-history">
        <h2 className="title-history">
          <span>
            {" "}
            <img src={pattern1} alt='pattern'/>{" "}
          </span>{" "}
          НАША ИСТОРИЯ{" "}
          <span>
            {" "}
            <img src={pattern2} alt='pattern'/>{" "}
          </span>
        </h2>
        <p className="paragraph-history">
          берет свое начало со времен великих империй
        </p>
        <p className="paragraph-secondary-history">
          где чистота и свежесть являлись признаком высшего общества{" "}
        </p>
      </div>
      <div className="image-box-history">
        <div>
          <img src={otoman} alt="mosque in istanbul" className="img-history" />
          <p className="img-title-history">
            Османская <br /> Империя
          </p>
        </div>
        <div>
          <img src={logo} alt="brand logo" className="brand-logo-history" />
        </div>
        <div>
          <img src={roman} alt="roman empire" className="img-history" />
          <p className="img-title-history">
            Римская <br /> Империя
          </p>
        </div>
      </div>
      <div className='divider-history'/>
    </div>
  );
};

export default History;
