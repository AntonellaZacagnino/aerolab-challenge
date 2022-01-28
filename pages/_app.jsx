import '../styles/globals.scss'
import { CoinsProvider } from '../context/coinsContext'
import { ProductsProvider } from '../context/productsContext'

function MyApp({ Component, pageProps }) {
  return <CoinsProvider><ProductsProvider><Component {...pageProps} /></ProductsProvider></CoinsProvider> 
}

export default MyApp
