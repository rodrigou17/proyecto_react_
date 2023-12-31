import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import ShoppingCart from '@/components/molecules/ShoppingCart'
import CardsList from "@/components/molecules/CardsList";
import Carousel from '@/components/molecules/Carousel.js/Carousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Takaria - Tienda online</title>
        <meta name="description" content="Takaria: Tienda online de calzados." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Carousel />
      <CardsList />
      <Footer />
    </>
  )
}

