import { useState } from 'react'
import { Message } from '../Message'

const initialMessages = [
    {
        author: 'User A',
        content: 'Hello'
    },
    {
        author: 'User B',
        content: 'Goodbye'
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
            content: `${newContent}`
        }



        setMessageState([newMessage, ...messageState])
    }



    return (

        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Who's Talking?
                    <br/>
                    <input type = 'text'/>
                    <hr/>
                </label>
                <label>
                    What's happening?
                    <br/>
                    <input type = 'text'/>
                    <hr/>
                </label>
                
                <button>Chat</button>
            </form>
            
            {
                messageState.map(
                    (messageObj, index) => <Message 
                        key={index} 
                        message={messageObj}/>)
            }

        </div>

    )

}

export default MessageBoard