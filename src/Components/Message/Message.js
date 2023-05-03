function Message ({ message, handleUpdate }) {

const heardStyles = {
    textDecoration: 'line-through',
    color: 'red'
}

const handleChange = (e) => {
    handleUpdate(message, e.target.checked)
}

    return (

        <>
            
            <span style={message.heard ? heardStyles : {}}>{message.author} says: {message.content}</span>
            <input type="checkbox" onChange={handleChange} checked={message.heard}/>
            <br/>
        </>
    
        )

}

export default Message