import { Navbar } from "../components/Navbar";
import Head from "next/head";

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
    </div>
  );
};
export default Projects;
