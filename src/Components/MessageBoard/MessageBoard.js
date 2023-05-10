import { useState } from 'react'
import { Message } from '../Message'

const initialMessages = [
    {
        author: 'A',
        content: 'Hello',
        heard: false
    },
    {
        author: 'B',
        content: 'Goodbye',
        heard: true
    }
]

function MessageBoard () {

    const [messageState, setMessageState] = useState(initialMessages)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAuthor = e.target[0].value
        const newContent = e.target[1].value

        const newMessage = {
            author: `${newAuthor}`,
            content: `${newContent}`,
            heard: false
        }

        setMessageState([newMessage, ...messageState])
    }

    const handleUpdate = (message, value) => {
        const updatedMessages = messageState.map(item => {
            if (item === message) {
                return {
                    ...message,
                    heard: value
                }
            } else {
                return item
            }
        })
        setMessageState(updatedMessages)
    }

    const handleDelete = (message) => {
        const newMessages = messageState.filter(item => {
            if (item !== message) {
                return message
            }
        })
        setMessageState(newMessages)
    }

    return (

        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Who's Talking?
                    <br/>
                    <input type = 'text'/>
                    <br/>
                </label>
                <label>
                    What's happening?
                    <br/>
                    <input type = 'text'/>
                    <br/>
                </label>
                <button>Chat</button>
                <hr/>
            </form>
            
            {
                messageState.map(
                    (messageObj, index) => <Message 
                        key={index} 
                        message={messageObj}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                    />)
            }

        </div>

    )

}

export default MessageBoard