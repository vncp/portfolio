import { Navbar } from "../components/Navbar";
import Head from "next/head";
import ProjectView from "../components/ProjectView";

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
      <div id="projects" style={{ height: "100vh" }}>
        <h1 className="wip"></h1>
        <ProjectView />
        <h1 className="wip">
          <b>In progress, more to come!</b>
        </h1>
      </div>
    </div>
  );
};
export default Projects;
