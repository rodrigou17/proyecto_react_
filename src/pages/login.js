import Head from "next/head"
import Link from "next/link"
import LogIn from "@/components/molecules/LogIn"

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
      </>
    )
  }

  export default login; 
