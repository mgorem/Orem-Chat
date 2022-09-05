import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Orem Chat</span>
        <span className='title'>Register</span>
        <form>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='email(example@email.com)' />
            <input type="password" placeholder='Password' />
            <input type="file" placeholder='' />
            <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
