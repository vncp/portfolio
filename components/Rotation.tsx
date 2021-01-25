import styles from "../styles/Rotation.module.css";
import React, { useState, useEffect, useRef } from "react";

const Rotation = ({ words }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    setInterval(() => changeText(), 4000);
  }, []);
  const changeText = () => {
    setI((i) => i + 1);
  };
  return <span className={styles.carousel}>{words[i % words.length]}</span>;
};

export default Rotation;
