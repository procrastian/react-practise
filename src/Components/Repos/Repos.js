import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import './Repos.css'

const initialFormData = {
    github: ''
}

export default function Repos () {
    const [repos, setRepos] = useState([])
    const [username, setUsername] = useState('')
    const [formData, setFormData] = useState(initialFormData)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Not Found') {
                setNotFound(true)
            } else {
                setNotFound(false)
                setRepos(data)
                console.log(data)
            }
        })
    }, [username])


    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(formData.github)
    }

    const handleChange = (e) => {
        setFormData({...formData, github: e.target.value})
    }

    return (
        <>
            {
                notFound && <div>user '{username}' does not exist</div>
            }
            <form onSubmit={handleSubmit}>
                <input type='text' name='github' onChange={handleChange} value={formData.github}/>
                <button>Get Repos</button>
            </form>
            {
                repos.map((repo => (
                    <div>
                        <Link className={'repoLink'} to={`/${username}/${repo.name}`}>{repo.name}</Link>
                    </div>
                )))
            }
        </>
    )
}