import './register.scss'
import { Link } from "react-router-dom"
import { useState } from 'react'
const Register = () => {
  const [name, setName] = useState("")
  const [phone , setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const regiterData = () =>{
    console.log(name , phone , password , email)
    alert("Data is submitted")
  }
  return (
    <div className='register'>
      <div className='card'>
      <div className='left'>
          <h1>
           Grow Smart
          </h1>
          <p>Grow Smart is to help parents interact with other parents to discuss their child’s daily routine activities, find diet tips and cover all parent concerns on a single platform.  </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
      </div>
      <div className='right'>
       <h1>Register</h1>
      <form>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder='PhoneNo' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={regiterData} type="button">Register</button>
      </form>
      </div>

      </div>
    </div>
  )
 
}
export default Register
