import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

function Form({handleNotes}) {

const [comment, setComment] = useState({})
const params = useParams();
const navigate = useNavigate()
const [notes, setNotes] = useState([]);

useEffect(() => {
  fetch("http://localhost:4000/notes")
    .then((res) => res.json())
    .then((data) => 
      setNotes(data))
}, []);

function handleSubmit (e) {
  e.preventDefault()
  console.log({comment})

const newComment = {
  name: params.reponame,
  comment: comment,
  username:params.username,
  timestamp: new Date()
}

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newComment)
  }

  fetch('http://localhost:4000/notes', opts)
  .then(response => response.json())
  .then(() => {
    navigate(`/${params.username}/${params.reponame}`);    
  });
}

const changeComment = (e) => {
  setComment(e.target.value)
}

  return (
    <form onSubmit={handleSubmit}>
      <textarea onChange={changeComment} type="text" placeholder="Hi there" rows={10} cols={30} value={comment.value} required/>
      <br></br>
      <input type="submit" value="Submit your note"/>
    </form>
  );
}

export default Form;