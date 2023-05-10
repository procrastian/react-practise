import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Repos.css'

export default function Repo () {

    const [repo, setRepo] = useState({})
    const [notFound, setNotFound] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`https://api.github.com/repos/${params.username}/${params.reponame}`)
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Not Found') {
                setNotFound(true)
            } else {
                console.log(data)
                setNotFound(false)
                setRepo(data)
            }
        })
    }, [])

    return (
        <>
            {
                notFound ? (
                    <div>repo '{params.reponame}' of user '{params.username}' does not exist</div>
                ) : (
                    <div>
                        <ul>
                            <li>name: {repo.name}</li>
                            <li>language: {repo.language}</li>
                            <li>SSH: {repo.ssh_url}</li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}