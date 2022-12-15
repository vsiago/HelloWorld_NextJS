import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.container}>
            <h2><Link href="/">NEXMID</Link></h2>
            <ul>
                <li>
                    <Link href="/about">Sobre</Link>
                    <Link href="products">Produtos</Link>
                    <Link href="blog">Blog</Link>
                    <Link href="contact">Contato</Link>
                </li>
            </ul>
        </div>
    )
}