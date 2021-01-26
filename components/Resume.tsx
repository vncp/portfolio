import { RestaurantMenuTwoTone } from "@material-ui/icons";
import ResumeEntry, { Entry } from "./ResumeEntry";
import styles from "../styles/Resume.module.css";

const education: Entry = {
  entryTitle: "University of Nevada, Reno",
  entryTitleDescriptor: "Computer Science & Engineering B.S. | Math Minor",
  entryComment1: "2019 - Current",
  entryComment2: "Reno, NV",
};

const classes = [
  "Object Oriented Programming",
  "Data Structures",
  "Algorithms",
  "Computer Organization",
  "Design Patterns",
  "Machine Learning",
  "Programming Languages Pragmatics",
  "Operating Systems",
  "Discrete Mathematics",
  "Graph Theory",
  "Linear Algebra",
  "Calculus",
  "Probability & Statistics",
];

const work: Entry = {
  entryTitle: "University of Nevada, Reno",
  entryTitleDescriptor: "System Administrator",
  entryComment1: "Jan 2020 - Current",
  entryComment2: "Reno, NV",
};

const Resume = () => {
  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <div className={styles.heading}>Résumé</div>
        <ResumeEntry title="Education" entries={[education]}>
          Relevant Coursework:
          <ul
            style={{
              listStyleType: "circle",
              marginLeft: "40px",
              marginTop: "15px",
            }}
          >
            {classes.map((line) => (
              <li style={{ margin: "5px 0" }}>{line}</li>
            ))}
          </ul>
        </ResumeEntry>
        <ResumeEntry title="Work" entries={[work]}></ResumeEntry>
      </div>
    </div>
  );
};

export default Resume;
