import React from 'react'
import './ChatSection.css'
import DisplayMessage from '../DisplayMessage/DisplayMessage.jsx'

class ChatSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            messageList: [],
        }
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    updateMessageList = (val, isUser) => {
        this.setState({
            messageList: [...this.state.messageList, { message: val, isUser: isUser }]
        })
    }

    postMessage = () => {
        if (this.state.inputValue.length === 0)
            return
        this.updateMessageList(this.state.inputValue, true)
        this.onMessage(this.state.inputValue).then(value => {
            this.updateMessageList(value.data.botMessage, false)
        })
    }

    onMessage = (userMessage) => {
        return Promise.resolve({
            data: {
                botMessage: "Pardon my ignorance. I am just a dummy."
            }
        });
    };

    render() {
        return (
            <div className="chat-body">
                <div className="messages">
                    {this.state.messageList.map((value, index) => {
                        return (
                            <DisplayMessage
                                key={index}
                                message={value.message}
                                isUser={value.isUser}
                            />
                        )
                    })}
                </div>
                <div className="chat-footer">
                    <div className="input-box">
                        <input type="text" value={this.state.inputValue} placeholder="Type Message" onChange={this.updateInputValue} />
                    </div>
                    <div className="button-box">
                        <button type="submit" onClick={this.postMessage}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatSection