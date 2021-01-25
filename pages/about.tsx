import Head from "next/head";
import { Navbar } from "../components/Navbar";

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
    </div>
  );
};

export default About;
