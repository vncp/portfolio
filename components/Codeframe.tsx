import styles from "../styles/Codeframe.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IntroScene from "../components/IntroScene";
import Rotation from "../components/Rotation";

const CodeFrame = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.heading}>
        I'm an aspiring{" "}
        <Rotation
          className={styles.rotate}
          words={["engineer", "developer", "designer"]}
        ></Rotation>
        <span className={styles.blink}>|</span>
      </h1>
      <div className={styles.frame}>
        <div className={styles.windowTitle}>
          <span></span>info
          <span style={{ position: "relative", right: "4px" }}>
            <CloseIcon />
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
          <p className={styles.command}>{">>"}Vincent.hobbies</p>
          <p className={styles.output}>['running', 'coding', 'reading']</p>
          <p className={styles.command}>
            {">>"}
            <span className={styles.blink}>_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeFrame;
