import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'



function MyApp({ Component, pageProps }) {

const router = useRouter()


const noLayout = ['/about', '/blog']

if(noLayout.indexOf(router.route) > 2) {
  return <Component {...pageProps} />
} else {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


}

export default MyApp
