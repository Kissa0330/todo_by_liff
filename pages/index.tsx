import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  return (
    <div className={styles.index_div_all}>
      <Head>
        <title>Todo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className={styles.index_button}> add new todo</button>
      <form className={styles.index_form}>
        <input type="checkbox" value="finished" />
        <label>todos</label>
      </form>
      <button className={`${styles.index_button} ${styles.none_event}`}>
        finished todo
      </button>
      <form className={styles.index_form}>
        <input type="checkbox" checked value="finished" />
        <label>todos</label>
      </form>
    </div>
  );
};

export default Home;
