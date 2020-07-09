import React from 'react'

const DisplayMessage = ({message, isUser}) => {
    return(
        <div className="display-message-body">
            {message}
        </div>
    )
}

export default DisplayMessage