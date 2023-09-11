import Head from "next/head";
import Link from "next/link";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShoppingCart from "@/components/molecules/ShoppingCart";
import { useReducer } from "react";
import { TYPES } from "@/actions/shoppingActions";


const vershoppingcart = () => {
    return (
      <>
      <Head>
        <title>Carrito - Takaria - Tienda online</title>
        <meta name="description" content="Takaria: Tienda online de calzados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ShoppingCart/>
      <Footer />
      </>
    )
    }
  

  export default vershoppingcart;