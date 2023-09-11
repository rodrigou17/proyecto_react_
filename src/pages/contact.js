import Head from "next/head";
import Link from "next/link";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

const products = () => {
    return (
      <>
      <Head>
        <title>Contacto - Takaria - Tienda online</title>
        <meta name="description" content="Takaria: Tienda online de calzados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutMe />
      <Footer />
      </>
    )
  }

  export default products;