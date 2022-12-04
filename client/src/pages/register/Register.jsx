import './register.scss'
import { Link } from "react-router-dom"
const Register = () => {
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
        <input type="text" placeholder='Name'></input>
        <input type="text" placeholder='PhoneNo'></input>
        <input type="email" placeholder='Email'></input>
        <input type="password" placeholder='Password'></input>
        <button>Register</button>
      </form>
      </div>

      </div>
    </div>
  )
 
}
export default Register
