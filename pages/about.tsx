import Head from "next/head";
import styles from "../styles/About.module.css";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";

const About = () => {
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
        <title>About - Vincent Pham</title>
      </Head>
      <Navbar title="about"></Navbar>
      <div id="projects" style={{ height: "100vh" }}>
        <motion.div
          className={styles["about-container"]}
          style={{ position: "relative", bottom: "20%" }}
          initial={{ opacity: 0, left: "20%" }}
          animate={{ opacity: 1, left: 0 }}
          transition={{
            duration: 1.5,
          }}
        >
          <div className={styles["profile-container"]}>
            <h1>Vincent Pham</h1>
          </div>
          <div className={styles["about-body"]}>
            <motion.div
              initial={{ opacity: 0, right: "20%" }}
              animate={{ opacity: 1, right: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              I'm currently a student studying Computer Science & Engineering at
              University of Nevada, Reno trying to become a software engineer. I
              love all things coding like setting up servers, solving
              algorithms, or developing apps!
            </motion.div>
            <br />
            <motion.div
              className={styles["about-body"]}
              initial={{ opacity: 0, right: "20%" }}
              animate={{ opacity: 1, right: 0 }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              I currently work as a System Administrator at school which lets me
              develop web interfaces for administrative tasks for computer labs,
              troubleshoot computer problems for professors, or set up new
              servers!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
