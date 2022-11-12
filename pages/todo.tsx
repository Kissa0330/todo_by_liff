import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/todo.module.css";

const Todo: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
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
      <h1> Todo title</h1>
	  <span className={styles.todo_span_delete}></span>
	  <h2>description</h2>
	  <textarea className={styles.todo_input} cols={40} rows={10}></textarea>
	  <button className={styles.todo_button_save}>Save</button>
    </div>
  );
};

export default Todo;
