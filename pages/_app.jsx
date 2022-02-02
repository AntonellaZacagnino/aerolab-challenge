import '../styles/globals.scss'
import { CoinsProvider } from '../context/coinsContext'
import { ProductsProvider } from '../context/productsContext'

function MyApp({ Component }) {
  return <CoinsProvider><ProductsProvider><Component/></ProductsProvider></CoinsProvider> 
}

export default MyApp
