import { Navbar } from "../components/Navbar";
import Head from "next/head";
import Project from "../components/Project";
import styles from "../styles/Project.module.css";
import { motion } from "framer-motion";

const projectDocument1 = (
  <>
    <h1>Remote Instance Management</h1>
    <br />
    <p>
      This is the instance management interface that I created for staff workers
      to use.
    </p>
    <img
      src="/images/projects/instancemanagement.png"
      alt="Example of staff page"
      style={{ width: "100%" }}
    />
  </>
);

const Projects = () => {
  return (
    <div
      style={{
        position: "absolute",
        fontFamily: "Robotto",
        width: "100vw",
        left: "0",
        top: "0",
        backgroundColor: "yellow",
      }}
    >
      <Head>
        <title>Projects - Vincent Pham</title>
      </Head>
      <Navbar title="projects"></Navbar>
      <div className={styles.background}>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, right: "40%" }}
          animate={{ opacity: 1, right: "0%" }}
          transition={{ duration: 1 }}
        >
          <Project
            title="Remote Linux Access & Administration"
            body="A web application allowing computer science students to access Linux systems remotely through a web browser. Also worked on an interface that allowed students to manage their own instances remotely or for staff to easily orchestrate administrative tasks."
            projectDocument={projectDocument1}
          />
        </motion.div>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, left: "40%" }}
          animate={{ opacity: 1, left: "0%" }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Project title="This Portfolio" body="yes." />
        </motion.div>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, right: "40%" }}
          animate={{ opacity: 1, right: "0%" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Project
            title="Productivity Journaling Web App"
            body="Simple journaling app created using React and a Python backend."
          />
        </motion.div>
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, left: "100%" }}
          animate={{ opacity: 1, left: "0%" }}
          transition={{ duration: 2.5, delay: 0.1 }}
        ></motion.div>
      </div>
    </div>
  );
};
export default Projects;
