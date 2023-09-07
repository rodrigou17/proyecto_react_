import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import Product from "@/components/atoms/cart_components/Product";
import axios from "axios";
import ShoppingCart from "@/components/molecules/ShoppingCart";
import { Navbar } from "react-bootstrap";

const products = () => {
    return (
      <>
      <Head>
      <Navbar/>
      <title>Products</title>
      </Head>
        <Navbar/>
      <br></br>
      <ShoppingCart/>
      <br></br>
      <Footer/>
      </>
    )
  }

  export default products;