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
        <div className="intro-bold" style={{ fontSize: "30pt" }}>
          Why hello there! (I was hiding)
        </div>
        <div className="intro-container">
          <CodeFrame></CodeFrame>
        </div>
        <div className="intro-container">
          <Resume></Resume>
        </div>
      </div>
    </div>
  );
};

export default Home;
