import React from "react";
import styles from '../Section/Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.divSection}>
    <section>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  </div>
);

export default Section;