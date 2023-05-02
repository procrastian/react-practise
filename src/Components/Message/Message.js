function Message ({ message }) {

    return (

        <>
            {/* {console.log('author?', message.author)}
            {console.log('content?', message.content)} */}
            <p>{message.author} says: {message.content}</p>
        </>
    
        )

}

export default Message