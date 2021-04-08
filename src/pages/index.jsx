import * as React from "react";
import { Helmet } from "react-helmet";

import styles from "./index.module.css";
// import TechnicalWork from "../components/TechnicalWork/TechnicalWork";
import logo from "../images/bottle.jpg";

//containers
import Hero from "./containers/Hero/Hero";
import History from "./containers/History/History";
import Product from "./containers/Product/Product";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

const IndexPage = () => {

  return (
    <section className={styles.main_section}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Istanbul Kolonyasi</title>
        <meta property="og:url" content="https://www.kolonya.uz/" />
        <meta property="og:title" content='' />
        <meta property="og:description" content='' />
        <meta property="og:image" content={logo} />
      </Helmet>
      {/* <TechnicalWork /> */}
      <Hero />
      <History />
      <Product />
      <About />
      <Contact />
      <Footer />
    </section>
  );
};

export default IndexPage;
