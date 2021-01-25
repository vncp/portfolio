import Head from "next/head";
import { Navbar } from "../components/Navbar";
import CodeFrame from "../components/Codeframe";

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
        <title>Portfolio - Vincent Pham</title>
      </Head>
      <Navbar title="vincent-pham"></Navbar>
      <div className="intro-content">
        <div className="intro-container">
          <div className="intro-bold" style={{ fontSize: "30pt" }}>
            Why hello there! (I was hiding)
          </div>
          <CodeFrame></CodeFrame>
        </div>
      </div>
    </div>
  );
};

export default Home;
