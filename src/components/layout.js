import dynamic from "next/dynamic"
import Head from "next/head"
import Footer from "./footer"


const Navbar = dynamic( () => import("./navbar"), {ssr: false})
export default function Layout({children, title = ''}) {
  return (
    <>
    <Head>
        <title>{`Tom Murray photography - ${title}`}</title> 
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    
    {children}

    <Footer/>
    </>
  )
}
