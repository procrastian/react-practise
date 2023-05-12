import { useState, useEffect } from 'react'

export default function AllNotes () {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/notes")
          .then((res) => res.json())
          .then((data) => setNotes(data))

      }, []);


    return (
        <>
            <h1>Welcome to all the saucy notes...</h1>
            <ul>
                {notes.map((note) => (
                <li>
                    user: {note.username} -- 
                    <br/>
                    repo: {note.name}
                    <br/>
                    {note.comment}
                    <hr/>

                </li>
            ))}
            </ul>
            
        </>
    )
}
