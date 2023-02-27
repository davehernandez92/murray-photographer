import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <meta name="description" content="Halifax Nova Scotia based photographer , Tom Murray, Canada" />
        <Link rel='stylesheet' href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link  href="https://fonts.googleapis.com/css2?family=Gloock&family=Lato:wght@400;700;900&family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet"/>



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
