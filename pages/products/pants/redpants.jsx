import Link from "next/link"
import styles from '../../../styles/Globals.module.css'

export default function RedPlant() {
    return (
        <div className={styles.container}>
            <h2>Calças Vermelhas</h2>
            <h4><Link href="../pants">voltar</Link></h4>
        </div>
    )

}