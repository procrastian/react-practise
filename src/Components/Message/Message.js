function Message ({ message, handleUpdate, handleDelete}) {

const heardStyles = {
    textDecoration: 'line-through',
}

const handleChange = (e) => {
    handleUpdate(message, e.target.checked)
}

const handleClick = () => {
    handleDelete(message)
}

    return (

        <>
            {
                message.author === 'A' && <span> 👹 </span>
            }
            {
                message.author === 'C' && <span> 💀 </span>
            }
            <span style={message.heard ? heardStyles : {}}>{message.author} says: {message.content}</span>
            <input type="checkbox" onChange={handleChange} checked={message.heard}/>
            <button onClick={handleClick}>DEL</button>
            <br/>
        </>
    
        )

}

export default Message