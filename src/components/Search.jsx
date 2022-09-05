import React from 'react'
import Orem from '../images/orem1.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src={Orem} alt="" />
        <div className="userChatInfo">
          <span>Muriithi</span>
        </div>
      </div>
    </div>
  )
}

export default Search