import React from "react";
import styles from "./FooterStyles.module.css";
const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Soumyajit Saha. <br />
        All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
