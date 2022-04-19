
import '../styles/globals.css'
import {Themeprovider} from './Context'


function MyApp({ Component, pageProps }) {
  return <Themeprovider><Component {...pageProps}  /></Themeprovider>
}





export default MyApp
