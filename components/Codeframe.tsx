import styles from "../styles/Codeframe.module.css";
import CloseIcon from "@material-ui/icons/Close";
import Rotation from "../components/Rotation";
import { useState } from "react";

const CodeFrame = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.heading}>
        I'm an aspiring{" "}
        <Rotation
          words={["engineer", "developer", "designer", "creator"]}
        ></Rotation>
        <span className={styles.blink}>|</span>
      </h1>
      <div className={styles.frame}>
        <div className={styles.windowTitle}>
          <span></span>info
          <span>
            <CloseIcon
              style={{
                fontSize: "1vw",
                marginTop: ".08vw",
                marginRight: ".5vw",
              }}
            />
          </span>
        </div>
        <div className={styles.terminal}>
          <p className={styles.command}>{">>"} Vincent.location</p>
          <p className={styles.output}>'Reno, NV'</p>
          <p className={styles.command}>{">>"} Vincent.education.schoolName</p>
          <p className={styles.output}>'University of Nevada, Reno'</p>
          <p className={styles.command}>{">>"} Vincent.education.major</p>
          <p className={styles.output}>'Computer Science & Engineering B.S'</p>
          <p className={styles.command}>
            {">>"} Vincent.education.expectedGraduation
          </p>
          <p className={styles.output}>'May 2022'</p>
          <p className={styles.command}>
            {">>"} Vincent.workExperience.current
          </p>
          <p className={styles.outputS}>
            company: 'University of Nevada, Reno'
          </p>
          <p className={styles.outputS}>role: 'Student System Administrator'</p>
          <p className={styles.outputS}>startDate: 'Janurary 2020'</p>
          <p className={styles.outputS}>endDate: 'Current'</p>
          <p className={styles.command} style={{ marginTop: "30px" }}>
            {">>"} Vincent.resume.link
          </p>
          <p className={styles.output}>
            '
            <a href="/pdf/CV-VincentPham.pdf" className={styles.link}>
              CV-VincentPham.pdf
            </a>
            '
          </p>
          <p className={styles.command}>{">> "}Vincent.hobbies</p>
          <p className={styles.output}>
            ['running', 'coding', 'reading', 'photography']
          </p>
          <p className={styles.command} style={{ marginBottom: "20px" }}>
            {">> ./jump "}
            <a href="#">home{` `}</a>
            <a href="#resume">resume{` `}</a>
            <a href="#projects">projects</a>
            <span className={styles.blink}>_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeFrame;
