import type { NextPage } from "next";
import Head from "next/head";
import MastHead from "../components/masthead";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beatitudo</title>
        {/* <meta name='description' content='Generated by create next app' /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MastHead />
      <div className="font-bold text-8xl text-white">Hello</div>
    </div>
  );
};

export default Home;
