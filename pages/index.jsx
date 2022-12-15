import styles from '../styles/Globals.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início do App</title>
      </Head>
      <h1>Início do Aplicativo</h1>
    </div>
  )
}
