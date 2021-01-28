import { RestaurantMenuTwoTone } from "@material-ui/icons";
import ResumeEntry, { Entry } from "./ResumeEntry";
import styles from "../styles/Resume.module.css";

const classes = [
  "Object Oriented Programming",
  "Data Structures",
  "Algorithms",
  "Computer Organization",
  "Design Patterns",
  "Machine Learning",
  "Programming Languages Pragmatics",
  "Operating Systems",
  "Design Process (Human-centric Design)",
  "Discrete Mathematics",
  "Graph Theory",
  "Linear Algebra",
  "Calculus",
  "Probability & Statistics",
];
const education = [
  {
    entryTitle: "University of Nevada, Reno",
    entryTitleDescriptor: "Computer Science & Engineering B.S. | Math Minor",
    entryComment1: "2019 - Current",
    entryComment2: "Reno, NV",
    content: (
      <>
        <div>Relevant Coursework:</div>
        <ul className={styles.list}>
          {classes.map((line) => (
            <li className={styles.listItem} key={line}>
              {line}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    entryTitle: "University of Nevada, Reno",
    entryTitleDescriptor: "Neuroscience B.S",
    entryComment1: "2016 - 2020",
    entryComment2: "Reno, NV",
    content: (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Premedical Coursework: Involving communication, volunteer work, and
          leadership.
        </li>
      </ul>
    ),
  },
];

const work: Entry[] = [
  {
    entryTitle: "University of Nevada, Reno",
    entryTitleDescriptor: "System Administrator",
    entryComment1: "Jan 2020 - Current",
    entryComment2: "Reno, NV",
    content: (
      <>
        <div>Work Summary</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Responsibility of managing computer labs/print servers/remote hosts
            and developing relevant infrastructure.
          </li>
          <li className={styles.listItem}>
            Assist students, professors, and researchers with technical
            problems.
          </li>
        </ul>
        <div>Development Experience:</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <b>Remote Linux Containers:</b> Server hosting accessible Linux
            containers through the web browser using Apache Guacamole and VNC
            protocols.
            <br />
            <b>Front-end management interface:</b> Typescript, NextJS,
            Bootstrap.
            <br />
            <b>Backend:</b> LXC/LXD (Container), Python (CLI
            Management/Automated Email System), GoLang (API), MySQL (Student
            Database), VNCServer/VNCViewer (Remote I/O)
          </li>
          <li className={styles.listItem}>
            <b>Sysadmin Operations Scripting:</b> Scripts in Bash, Python, and
            GoLang which provided CLI tools to help aid in cloning/managing
            computers, managing database information for different terms, and
            making resources more accessible to students.
          </li>
        </ul>
      </>
    ),
  },
  {
    entryTitle: "University of Nevada, Reno",
    entryTitleDescriptor: "Research Assistant",
    entryComment1: "Jan 2020 - Current",
    entryComment2: "Reno, NV",
    content: (
      <>
        <div>Experiment:</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Neuroscience research involving MATLAB scripting for data-analysis (
            <a
              href="https://www.biorxiv.org/content/10.1101/2020.04.30.071126v1"
              style={{ color: "blue" }}
            >
              Preprint
            </a>
            ,{" "}
            <a
              href="https://github.com/vncp/pierautlab/tree/master/MATLAB"
              style={{ color: "blue" }}
            >
              GitHub
            </a>
            )
          </li>
        </ul>
      </>
    ),
  },
];

const Resume = () => {
  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <div className={styles.heading}>Résumé</div>
        <ResumeEntry title="Education" entries={education}></ResumeEntry>
        <ResumeEntry title="Work" entries={work}></ResumeEntry>
      </div>
    </div>
  );
};

export default Resume;
