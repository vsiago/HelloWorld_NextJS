import Link from "next/link"
import styles from '../../../styles/Globals.module.css'

export default function BluePant() {
    return(
        <div className={styles.container}>
            <h2>Calças Azuis</h2>
            <h4><Link href="../pants">Voltar</Link></h4>
        </div>
    )
}