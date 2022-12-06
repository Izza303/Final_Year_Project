import './login.scss'
import { Link } from "react-router-dom"
import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const checkLogin = () =>{
    console.log(password , email)
    alert("Logged- In")
  }
  return (
    <div className='login'>
      <div className='card'>
      <div className='left'>
          <h1>
           Grow Smart
          </h1>
          <p>Grow Smart is to help parents interact with other parents to discuss their child’s daily routine activities, find diet tips and cover all parent concerns on a single platform.  </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
      </div>
      <div className='right'>
       <h1>Login</h1>
      <form>
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={checkLogin} type="button">Login </button>
      </form>
      </div>

      </div>
    </div>
  )
}

export default Login
