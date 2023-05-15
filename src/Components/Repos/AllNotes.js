import { useState, useEffect } from 'react'

export default function AllNotes () {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('')
    const [filteredNotes, setFilteredNotes] = useState([]);


    useEffect(() => {
        fetch("http://localhost:4000/notes")
          .then((res) => res.json())
          .then((data) => {
            setNotes(data);
            setFilteredNotes(data)})


      }, []);

      const handleSubmit =(e) => {
        e.preventDefault()
        
      }

      const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        if (searchTerm.length === 0) {
            setFilteredNotes(notes);
        } else {
           const filteredNotes = notes.filter((note) => {
                return note.comment.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredNotes(filteredNotes);
        }

    }
    return (
        <>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor='search-notes' id='search'>
                    Search notes
                </label>
                <input
                    placeholder='type to search'
                    id='search-notes'
                    name='search-notes'
                    type='text'
                    value={search}
                    onChange={handleSearch}
                />
                <input type='submit' value={'search'} />
            </form>
            <ul>
<<<<<<< HEAD
                {notes.map((note) => (
                <li>
                    user: {note.username} -- 
                    <br/>
                    repo: {note.name}
                    <br/>npm start
                    {note.comment}
                    <hr/>

                </li>
            ))}
=======
                {filteredNotes.map((note) => (
                    <li key={note.id}>
                        user: {note.username} --
                        <br />
                        repo: {note.name}
                        <br />
                        {note.comment}
                        <br />
                        <p>{(new Date(Date.parse(note.timestamp))).toLocaleDateString()} {(new Date(Date.parse(note.timestamp))).toLocaleTimeString()} </p>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
}

