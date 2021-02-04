import * as React from "react";
import { Helmet } from "react-helmet";

import styles from "./index.module.css";
import Main from "../components/Main/Main";
import WhyKolonya from "../components/WhyKolonya/WhyKolonya";
import Products from "../components/Products/Products";
import logo from "../images/bottle.jpg";

const IndexPage = () => {
  const [lang, setLang] = React.useState("RUS");
  const contacts = React.useRef(null);

  const titleText =
    lang === "RUS"
      ? "Купить Kolonya в Узбекистане."
      : "Kolonyani O'zbekistonda sotib oling.";

  const descriptionText =
    lang === "RUS"
      ? "Kolonya эффективна и в лечебных мерах, ведь помогает избавиться от головной боли, облегчает дыхание при насморке и расслабляет напряженные мышцы, если втереть несколько капель в ноющую от боли зону. Приведёт в чувство упавшего в обморок и продезинфицирует рану."
      : "Kolonya tibbiy maqsadlarda ham samaralidir, chunki u bosh og'rig'idan xalos bo'lishga yordam beradi, burun oqishi bilan nafas olishni osonlashtiradi va og'rigan joyga bir necha tomchi surtib qo'ysangiz, taranglashgan mushaklarni bo'shashtiradi. Hushidan ketgan odamni o'ziga keltiradi va yarani dezinfeksiya qiladi.";

  return (
    <section className={styles.main_section}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Istanbul Kolonyasi</title>
        <meta property="og:url" content="https://www.kolonya.uz/" />
        <meta property="og:title" content={titleText} />
        <meta property="og:description" content={descriptionText} />
        <meta property="og:image" content={logo} />
      </Helmet>
      <Main setLang={setLang} lang={lang} />
      <WhyKolonya lang={lang} contacts={contacts} />
      <Products lang={lang} contacts={contacts} />
    </section>
  );
};

export default IndexPage;
