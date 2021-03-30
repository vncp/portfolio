import Head from "next/head";
import { Navbar } from "../components/Navbar";
import CodeFrame from "../components/Codeframe";
import Resume from "../components/Resume";
import Link from "next/link";

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
        <meta property="og:image" content="http://vncp.me/ogimg.jpg"></meta>
        <meta property="og:title" content="Vincent Pham - Portfolio"></meta>
        <meta property="og:url" content="http://vncp.me/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Portfolio site consisting of an online resume, projects, and and a soon to be blog!"
        ></meta>
      </Head>
      <Navbar title="vincent pham"></Navbar>
      <div className="intro-content">
        <div className="intro-container" style={{ margin: "auto" }}>
          <CodeFrame />
        </div>
        <div id="resume" className="intro-container">
          <Resume />
        </div>
        <div id="projects" style={{ height: "50vh" }}>
          <h1 className="wip">
            <b>
              Check out my{" "}
              <u>
                <Link href="/projects">
                  <a href="/projects">projects!</a>
                </Link>
              </u>
            </b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
