import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import styles from "../styles/Codeframe.module.css";
import Rotation from "./Rotation";

const CodeFrame = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.heading}>
        I'm an aspiring{" "}
        <Rotation words={["engineer", "developer", "designer"]}></Rotation>
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
            <a href="/pdf/Resume-VincentPham.pdf" className={styles.link}>
              Resume-VincentPham.pdf
            </a>
            '
          </p>
          <p className={styles.command}>{">> "}Vincent.hobbies</p>
          <p className={styles.output}>
            ['running', 'coding', 'reading', 'photography']
          </p>
          <p className={styles.command} style={{ marginBottom: "20px" }}>
            {">> ./jump "}
            <a className={styles.link} href="#resume">
              resume{" "}
            </a>
            <Link href="/projects">
              <a className={styles.link} href="/projects">
                projects
              </a>
            </Link>
            <span className={styles.blink}>_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeFrame;
