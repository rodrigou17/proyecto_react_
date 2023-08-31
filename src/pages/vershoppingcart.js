import Head from "next/head";
import Link from "next/link";
import ShoppingCart from "@/components/molecules/ShoppingCart";
import { useReducer } from "react";
import { TYPES } from "@/actions/shoppingActions";


const vershoppingcart = () => {
    return (
      <>
      <Head>
      <title>Shopping Cart</title>
      </Head>
      <header>
          <nav>
              <Link href= "">Shopping Cart</Link>
          </nav>
      </header>
      <br></br>
      <ShoppingCart/>
      </>
    )
    }
  

  export default vershoppingcart;