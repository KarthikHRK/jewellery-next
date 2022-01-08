import Navbar from '../src/global/navbar'
import Footer from '../src/global/footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
