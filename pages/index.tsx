import Head from "next/head";
import { Navbar } from "../components/Navbar";
import CodeFrame from "../components/Codeframe";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <div
      style={{
        position: "absolute",
        fontFamily: "Robotto",
        width: "100vw",
        left: "0",
        top: "0",
      }}
    >
      <Head>
        <title>Vincent Pham</title>
      </Head>
      <Navbar title="vincent pham"></Navbar>
      <div className="intro-content">
        <div className="intro-container" style={{ margin: "auto" }}>
          <CodeFrame></CodeFrame>
        </div>
        <div id="resume" className="intro-container">
          <Resume></Resume>
        </div>
        <div id="projects">
          <h1 className="wip">
            <b>Work in progress!</b>
            <br />
            <br /> Hope you like what I have so far!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
