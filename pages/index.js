import Head from 'next/head'
import Home from '../src/components/home'
// import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Jewellery Show</title>
        <meta name="description" content="Jewellery Event Show" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<Home/>
       
      </main>

 
    </div>
  )
}
