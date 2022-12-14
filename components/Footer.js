import styles from '../styles/Footer.module.css'

export default function Header() {
    return(
        <div className={styles.container}>
            <span>Aplicativo criado com NextJS 13 | <strong>NEXMID ©</strong> 2022</span>
        </div>
    )
}