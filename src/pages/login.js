import Head from "next/head"
import Link from "next/link"
import LogIn from "@/components/molecules/LogIn"
import Footer from "@/components/Footer"

const login = () => {
    return (
      <>
      <Head>
      <title>log In</title>
      </Head>
      <header>
          <nav>
              <Link href= "">Log In</Link>
          </nav>
      </header>
      <br></br>
      <LogIn/>
      <br></br>
      <Footer/>
      </>
    )
  }

  export default login; 
