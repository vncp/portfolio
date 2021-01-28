import { Navbar } from "../components/Navbar";
import Head from "next/head";

const Blog = () => {
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
        <title>Blog - Vincent Pham</title>
      </Head>
      <Navbar title="blog"></Navbar>
      <div id="projects" style={{ height: "100vh" }}>
        <h1 className="wip">
          <b>Work in progress!</b>
          <br />
          <br /> Hope you like what I have so far!
        </h1>
      </div>
    </div>
  );
};

export default Blog;
