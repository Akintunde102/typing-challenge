import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/gen.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Typo: The Game</title>
        <meta name="description" content="Make your typing better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <u>Typo </u>
        </h1>

        <code className={styles.code}>Make your Typing Better</code>

        <div className={styles.container}>
          <a href="start"> <h1>Start Game</h1></a>
        </div>
      </main>
    </div>
  )
}

export default Home
