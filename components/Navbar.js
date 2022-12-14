import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.container}>
            <h2><Link href="/">Logo Name</Link></h2>
            <ul>
                <li>
                    <Link href="/about">Sobre</Link>
                    <Link href="products">Produtos</Link>
                    <Link href="blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}