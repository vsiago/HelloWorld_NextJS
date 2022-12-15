import Link from 'next/link'

export default function Products() {
    return (
        <div>
            <h1>Página produtos</h1>
            <h2><Link href="/products/pants">CALÇAS</Link></h2>
        </div>
    )
}