import React from 'react'
import './ChatSection.css'

const ChatSection = () => {
    return (
        <div className="chat-body">
            <div className="chat-footer">
                <div className="messages">
                    Hello
                </div>
                <input type="text" placeholder="Type Message" />
                <button type="submit">Send</button>
            </div>
        </div>
    )
}

export default ChatSection;