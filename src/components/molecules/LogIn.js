import styles from "./../../styles/Home.module.css"


const LogIn = () => {
    return (
        <div className= {styles.divform}>
        <form className= {styles.formm}>
            <br></br>
            <br></br>
            <input className= {styles.inputt} type= "text" name= "name" placeholder="User.." />
            <br></br>
            <br></br>
            <input className= {styles.inputt} type= "password" name= "name" placeholder="Password..."/>
            <br></br>
            <br></br>
            <input className= {styles.inputt} type= "text" name= "name" placeholder="Log In"/>
        </form>
      </div>
    )
  }
  
  export default LogIn