import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.breadcrumb}>
        <a href="#">HOME | </a> SHOP
      </p>
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
};

export default Hero;
