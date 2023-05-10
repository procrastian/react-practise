
import { useState, } from 'react'
import { useParams } from "react-router-dom";

function Form({setNotes, notes}) {

const [comment, setComment] = useState({})
const params = useParams();

const newComment = {
    id: Math.random(),
    name: params.reponame,
    comment: comment,
  }


function handleSubmit (e) {
  e.preventDefault()
  console.log({comment})

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newComment)
  }

  fetch('http://localhost:4000/notes', opts)
  .then(function (response) {
  return response.json()
  })
  
  setNotes([newComment, ...notes])
}

const changeComment = (e) => {
  setComment(e.target.value)
}

  return (
  
    <form onSubmit={handleSubmit}>
      <textarea onChange={changeComment} type="text" placeholder="Hi there" rows={10} cols={30} value={comment.value}/>
      <br></br>
      <input type="submit" value="Submit your note"/>
    </form>

  );
}

export default Form;
