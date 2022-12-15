import Link from 'next/link'

export default function Pants() {
    return (
        <div>
            <h1>Página de Calças</h1>
            <h2><Link href="/products/pants/bluepants">CALÇAS AZUIS</Link></h2>
            <h2><Link href="/products/pants/redpants">CALÇAS VERMELHAS</Link></h2>
        </div>
    )
}