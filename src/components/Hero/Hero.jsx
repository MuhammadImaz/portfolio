import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.titles}>Hi, My name is </h1>
        <h2 className={styles.title}> Muhammad Imaz</h2>
        <p className={styles.description}>
          I am an enthusiast web developer with expertise in React and
          NodeJS. 
        </p>
        <a href="mailto:imaz.anwar01@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me5.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
