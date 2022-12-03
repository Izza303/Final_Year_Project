import './login.scss'
const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
      <div className='left'>
          <h1>
           Grow Smart
          </h1>
          <p>Grow Smart is to help parents interact with other parents to discuss their child’s daily routine activities, find diet tips and cover all parent concerns on a single platform.  </p>
          <span>Don't you have an account</span>
          <button>Register</button>
      </div>
      <div className='right'>
       <h1>Login</h1>
      <form>
        <input type="text" placeholder='Username'></input>
        <input type="password" placeholder='Password'></input>
        <button>Login</button>
      </form>
      </div>

      </div>
    </div>
  )
}

export default Login
