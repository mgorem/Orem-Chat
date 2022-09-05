import React from 'react'
import Orem from '../images/orem1.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Orem Chat</span>
      <div className="user">
        <img src={Orem} alt="user" />
        <span>callmemg</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar