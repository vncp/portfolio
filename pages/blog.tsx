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
    </div>
  );
};

export default Blog;
