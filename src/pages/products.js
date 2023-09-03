import Head from "next/head";
import Link from "next/link";
import Navbar from '@/components/Navbar'
import CardsList from "@/components/molecules/CardsList";
import Footer from "@/components/Footer";

const products = () => {
    return (
      <>
      <Head>
        <title>Productos - Takaria - Tienda online</title>
        <meta name="description" content="Takaria: Tienda online de calzados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <CardsList />
      <Footer />
      </>
    )
  }

  export default products;