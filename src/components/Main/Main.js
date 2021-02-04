import React from "react";
import BackgroundSlider from "react-background-slider";
import SimpleSelect from "../shared/Select";


import background1 from "../../images/background1.jpg";
import seagull from '../../images/seagull.jpg'
import background2 from "../../images/background2.jpg";
import background3 from "../../images/background3.jpg";
import background4 from "../../images/background4.jpg";
import background5 from "../../images/background5.jpg";
import background6 from "../../images/background6.jpg";
import {useStyles} from './main.jss'


const Main = (props) => {
  const classes = useStyles();
  const subtitleText = props.lang === 'RUS' ? 'Мы делаем вашу жизнь безопасней' : "Hafsiz Hayot"
  return (
    <section id="main-section" className={classes.root}>
      <BackgroundSlider
        duration={5}
        transition={2}
        images={[
          seagull,
          background1,
          background2,
          background3,
          background4,
          background5,
          background6,
        ]}
      />
      <div className={classes.container}>
        <div className={classes.textBox}>
          <h1 className={classes.title}>ISTANBUL</h1>
          <h1 className={classes.title}>KOLONYASI</h1>
          <hr className={classes.line}/>
          <p className={classes.subtitle}>{subtitleText}</p>
          <SimpleSelect setLang={props.setLang} lang={props.lang}/>
        </div>
      </div>
    </section>
  );
};

export default Main;