import React from "react";
import Fade from "react-reveal/Fade";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import { useStyles } from "./products.jss";
import logo from "../../images/logo.png";
import { Grid } from "@material-ui/core";

import b1m from '../../images/b1.png';
import b2m from '../../images/b2.png';
import b3m from '../../images/b3.png';

const Products = (props) => {
  const classes = useStyles();
  const phoneLabelText = props.lang === "RUS" ? "Телефон" : "Telefon";
  const emailLabelText = props.lang === "RUS" ? "Почта" : "Pochta";
  //first box
  const firstBoxTitleText =
    props.lang === "RUS" ? "Многовековая история" : "Ko'p asrlik tarix";
  const firstBoxTextSelf =
    props.lang === "RUS"
      ? "Пока европейцы носили с собой мешочки с ароматными травами для придания аромата, в Турции использовали розовую воду на основе масел и экстрактов. Которая со временем сменилась на Kolonya, так полюбившейся Абдулхамиту II. "
      : "Yevropaliklar xushbo'y hid qo'shish uchun o'zlari bilan xushbo'y o't qoplarini olib yurishgan bo'lsa, Turkiyada yog'lar va ekstraktlar asosida atirgul suvidan foydalanishgan. Natijasida Abdulhamit II tomonidan juda sevilgan Kolonya suvi bilan o'zgargan.";
  //second box
  const secondBoxTitleText =
    props.lang === "RUS" ? "Знак гостеприимства" : "Mehmondo'stlik belgisi";
  const secondBoxTextSelf =
    props.lang === "RUS"
      ? "Все люди Турции использовали её не только для исходящего от них чарующего аромата, но и отдать дань уважения гостям, приходившие проведать и побеседовать. На ладонь капали 3-5 капель и предлагали восточные сладости, дабы почтить гостя. Kolonya источала запах апельсина, лилии, лаванды, жасмина, гардении или лимона. "
      : "Butun Turkiya aholisi nafaqat o'zlaridan taraladigan xushbo'y hid uchun, balki tashrif buyurgan va suhbatlashish uchun kelgan mehmonlarni hurmat qilish maqsadida ham foydalanishgan. Mehmonga izzat bildirish uchun kaftga 3-5 tomchi tomizib, shirinliklarni taklif qilishar edi. Kolonya apelsin, zambak, lavanda, jasmin, gardeniya yoki limon iforini taratar edi.";
  //second box
  const thirdBoxTitleText =
    props.lang === "RUS"
      ? "Антибактериальное средство"
      : "Antibakterial vosita";
  const thirdBoxTextSelf =
    props.lang === "RUS"
      ? "Именно поэтому в начале пандемии Covid-19 вся Европа скупала Kolonya. Только в марте 2020 года были проданы свыше 600 тысяч литров."
      : "Shuning uchun ham Kovid-19 pandemiyasining boshida butun Yevropa Kolonyani sotib olishdi. Faqatgina 2020-yilning mart oyida 600 ming litrdan ortiq sotilgan.";

  const brandText =
    props.lang === "RUS"
      ? "Приобретите для себя, родных или в подарок! Ведь это не просто жест доброты, но и забота в одном флаконе Kolonya."
      : "O'zingizga, oilangizga yoki sovg'a sifatida harid qiling! Axir, bu nafaqat mehr-oqibat ishorasi, balki  bitta Kolonya shishasida ham g'amxo'rlik bordir.";

  const addressText =
    props.lang === "RUS"
      ? "Адрес: Республика Узбекистан, город Самарканд, Юкори Хужа-соат, дом №53."
      : "Manzil: O`zbekiston Respublikasi, Samarqand shahri, Yuqori Xo`ja-soat, 53-uy.";

  return (
    <section id="Products" className={classes.root}>
      <div className={classes.first_div}>
        <Fade left>
          <div className={classes.text_box_left}>
            <h3 className={classes.box_title}>{firstBoxTitleText}</h3>
            <p className={classes.box_paragraph}>{firstBoxTextSelf}</p>
            <img src={b1m} alt='mosque' className={classes.onMobileDisplay}/>
          </div>
        </Fade>
        <Fade right>
          <div className={classes.text_box_right}>
            <h3 className={classes.box_title}>{secondBoxTitleText}</h3>
            <p className={classes.box_paragraph}>{secondBoxTextSelf}</p>
            <img src={b2m} alt='lemon' className={classes.onMobileDisplay}/>
          </div>
        </Fade>
        <Fade left>
          <div className={classes.text_box_left_2}>
            <h3 className={classes.box_title}>{thirdBoxTitleText}</h3>
            <p className={classes.box_paragraph}>{thirdBoxTextSelf}</p>
            <img src={b3m} alt='antiseptics' className={classes.onMobileDisplay}/>
          </div>
        </Fade>
      </div>

      <div id="Contact" ref={props.contacts} className={classes.brand_info}>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item md={3}>
            <p className={classes.brand_text}>{brandText}</p>
            <a style={{marginLeft: '10px'}} href="https://web.telegram.org/#/im?p=@istanbulkolonyasi" >
              <TelegramIcon className={classes.icon} />
            </a>
            <a href="https://www.instagram.com/istanbul_kolonyasi/" className={classes.btn}>
              <InstagramIcon className={classes.icon} />
            </a>
          </Grid>

          <Grid item xs={12} sm={3}>
            <InputLabel
              htmlFor="input-with-icon-adornment"
              className={classes.label}
            >
              {phoneLabelText}
            </InputLabel>
            <Input
              color="secondary"
              className={classes.input}
              value="(+998) 90 505-01-55"
              disabled
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <CallIcon />
                </InputAdornment>
              }
            />
          </Grid>

          <Grid item xs={12} sm={3} className={classes.formBox}>
            <InputLabel
              htmlFor="input-with-icon-adornment"
              className={classes.label}
            >
              {emailLabelText}
            </InputLabel>
            <Input
              className={classes.input}
              value="contact@kolonya.uz"
              disabled
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ padding: "5px 0 0 30px", color: "#636363", lineHeight: '25px' }}
          >
            <p>{addressText} </p>
            <p>Copyright © 2020 Kolonya </p>
            <p>All Rights Reserved</p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Products;
