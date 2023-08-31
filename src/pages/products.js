import Head from "next/head";
import Link from "next/link";
import CardsList from "@/components/molecules/CardsList";
import Footer from "@/components/Footer";

const products = () => {
    return (
      <>
      <Head>
      <title>Products</title>
      </Head>
      <header>
          <nav>
              <Link href= "">Products</Link>
          </nav>
      </header>
      <br></br>
      <CardsList/>
      <br></br>
      <Footer/>
      </>
    )
  }

  export default products;