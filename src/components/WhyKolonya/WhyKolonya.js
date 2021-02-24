import React from "react";
import Fade from "react-reveal/Fade";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

import { useStyles } from "./whyKolonya.jss";

const WhyKolonya = (props) => {
  const classes = useStyles();

  const firstSectionTitleText =
    props.lang === "RUS" ? "Kolonya — душистая вода покорившая всю Османскую империю и Европу." : "Kolonya - butun Usmonli imperiyasi va Yevropani zabt etgan xushbo'y suvi.";
  // first box
  const firstBoxTitleText =
    props.lang === "RUS" ? "Особенности Продукта" : "Mahsulot Xususiyatlari";
  const firstBoxTextSelf =
    props.lang === "RUS"
      ? "Это не просто душистая вода, пахнущая великолепными цветами и цитрусами. Она также обладает антисептическими и антибактериальными свойствами, защищая от воздействия микробов и убивая вирусы. Освежает и ухаживает за кожей, уничтожает неприятные запахи и придаёт бодрость."
      : "Bu nafaqat ajoyib gullar va sitrus mevalariga xushbo'y bo'lgan suv emasdir. Bundan tashqari, u antiseptik va antibakterial xususiyatlarga ega bo'lib, mikroblardan himoya qiladi va viruslarni yo'q qiladi. Terni yangilaydi va parvarishlaydi, yoqimsiz hidlarni yo'qotadi va jonlantiradi.";
  // second box
  const secondBoxTitleText =
    props.lang === "RUS" ? "Лечебные Свойства" : "Shifolash Xususiyatlari";
  const SecondBoxTextSelf =
    props.lang === "RUS"
      ? "Kolonya эффективна и в лечебных мерах, ведь помогает избавиться от головной боли, облегчает дыхание при насморке и расслабляет напряженные мышцы, если втереть несколько капель в ноющую от боли зону. Приведёт в чувство потерявшего сознание и продезинфицирует рану."
      : "Kolonya tibbiy maqsadlarda ham samaralidir, chunki u bosh og'rig'idan xalos bo'lishga yordam beradi, burun oqishi bilan nafas olishni osonlashtiradi va og'rigan joyga bir necha tomchi surtib qo'ysangiz, taranglashgan mushaklarni bo'shashtiradi. Hushidan ketgan odamni o'ziga keltiradi va yarani dezinfeksiya qiladi.";
  // third box
  const thirdBoxTitleText = props.lang === "RUS" ? "Традиция" : "An'ana";
  const thirdBoxTextSelf =
    props.lang === "RUS"
      ? "Желая обогатить нашу страну итак знаменитым гостеприимством, красотой обычаев и традиций. Мы открываем Kolonya для всего Узбекистана."
      : "Shunday ham butun dunyoga mehmondo'stligi, go'zal urf-odatlari va a'nanalari bilan mashxur bo'lgan mamlakatimizni yanada boyitmoqchi bo'lish istagida biz sizga Kolonyani butun O'zbekistonga taqdim qilmoqdamiz.";

  const btnText = props.lang === "RUS" ? "Контакты" : "Aloqa";
  return (
    <section id="Kolonya" className={classes.root}>
      <Fade>
        <h2 className={classes.sectionTitle}>{firstSectionTitleText}</h2>
      </Fade>
      <Fade>
        <hr className={classes.line} />
      </Fade>
      <Grid container spacing={10} className={classes.contentContainer}>
        <Grid item xs={12} md={4}>
          <Fade bottom>
            <div className={classes.box}>
              <LoyaltyOutlinedIcon className={classes.icon} />
              <h3 className={classes.boxTitle}>{firstBoxTitleText}</h3>
              <p className={classes.boxText}>{firstBoxTextSelf}</p>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Fade bottom>
            <div className={classes.box}>
              <LocalHospitalOutlinedIcon className={classes.icon} />
              <h3 className={classes.boxTitle}>{secondBoxTitleText}</h3>
              <p className={classes.boxText}>{SecondBoxTextSelf}</p>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Fade bottom>
            <div className={classes.box}>
              <HistoryOutlinedIcon className={classes.icon} />
              <h3 className={classes.boxTitle}>{thirdBoxTitleText}</h3>
              <p className={classes.boxText}>{thirdBoxTextSelf}</p>
            </div>
          </Fade>
        </Grid>
      </Grid>
      <Button size="large" className={classes.btn} onClick={() => props.contacts.current.scrollIntoView()}>
        {btnText}
      </Button>
    </section>
  );
};

export default WhyKolonya;
