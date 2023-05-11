import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";



function Home () {
    const [username, setUsername] = useState('')



    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('click submit', {username})
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' value={username} onChange={handleUsername} />
           <Link className="repoLink" to ={`/${username}`}><button>Get Repos</button></Link>
        </form>
        </>
    )
// form that has an input field
// text input 
    // >>username for URL path
// button 
    // >> link to repos list page using the username input 

    

}

export default Home
