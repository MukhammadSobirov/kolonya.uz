import React from "react";
import lottie from 'lottie-web';
import techWorkAnim from './16957-comming-soon.json';
import './TechnicalWork.css'

const TechnicalWork = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#tech-work-animation'),
      animationData: techWorkAnim
    })
  }, [])
  return (
    <div className='tech-work-container'>
      <div id='tech-work-animation'/>
      <h1>Ведутся технические работы</h1>
      <h2>Спасибо за ваше терпение</h2>
      <h3>Istanbul Kolonyasi</h3>
      <a href="tel:+998905050155">+(998) 90 505-01-55</a>
    </div>
  );
};

export default TechnicalWork;
