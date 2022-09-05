import React from 'react'
import Orem from '../images/orem1.jpg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Orem} alt="" />
        <div className="userChatInfo">
          <span>Muriithi</span>
          <p>Hola Mundo</p>
        </div>
      </div>
      {/* User 2 */}
      <div className="userChat">
        <img src={Orem} alt="" />
        <div className="userChatInfo">
          <span>Muriithi</span>
          <p>Hola Mundo</p>
        </div>
      </div>
      {/* User 3 */}
      <div className="userChat">
        <img src={Orem} alt="" />
        <div className="userChatInfo">
          <span>Muriithi</span>
          <p>Hola Mundo</p>
        </div>
      </div>
      {/* User 4 */}
      <div className="userChat">
        <img src={Orem} alt="" />
        <div className="userChatInfo">
          <span>Muriithi</span>
          <p>Hola Mundo</p>
        </div>
      </div>
    </div>
  )
}

export default Chats