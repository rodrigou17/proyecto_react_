import Head from "next/head"
import Link from "next/link"
import LogIn from "@/components/molecules/LogIn"
import Footer from "@/components/Footer"
import AboutMe from "@/components/AboutMe"

const login = () => {
    return (
      <>
      <Head>
      <title>log In</title>
      </Head>
      <header>
          
      </header>
      <br></br>
      <LogIn/>
      <br></br>
      <AboutMe/>
      <Footer/>
      </>
    )
  }

  export default login; 
