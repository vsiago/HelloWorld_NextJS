import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio do App!</title>
        <meta name="keyworkds" content="Roupas, Calçados, Boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você!"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Início do Aplicativo</h1>
      </div>
      <Image className={styles.img} src="/images/city.jpg" width='300' height='400' alt="Cidade a noite" />
    </>
  )
}
