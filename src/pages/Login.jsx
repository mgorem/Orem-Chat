import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Orem Chat</span>
        <span className='title'>Login</span>
        <form>
            <input type="email" placeholder='email(example@email.com)' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
