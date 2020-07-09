import React from 'react'
import './DisplayMessage.css'

const DisplayMessage = ({ message, isUser }) => {
    return (
        <div  className={isUser ? 'user-message' : 'bot-message'}>
            <div className="text-message">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default DisplayMessage