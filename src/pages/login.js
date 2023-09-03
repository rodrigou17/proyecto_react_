import Head from "next/head"
import Link from "next/link"
import Navbar from '@/components/Navbar'
import LogIn from "@/components/molecules/LogIn"
import Footer from "@/components/Footer"

const login = () => {
    return (
      <>
      <Head>
        <title>Login - Takaria - Tienda online</title>
        <meta name="description" content="Takaria: Tienda online de calzados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LogIn/>
      <Footer/>
      </>
    )
  }

  export default login; 
