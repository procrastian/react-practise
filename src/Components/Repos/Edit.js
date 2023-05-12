import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Edit() {

  const [notes, setNotes] = useState([])
  const params = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/notes')
    .then(res => res.json())
    .then((data) =>setNotes(data))
  }, [notes])

  return (<>
    {
      notes.map((note => (    
        note.name === `${params.reponame}` && note.username === `${params.username}` 
        &&
          <>
        <form>
           <textarea  type="text" rows={10} cols={30} value={note.comment}/>
        </form>
          </> 
        ))
      )
      }

    </>

  );
}

export default Edit;
