import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Repos.css";
export default function Repo() {
  const [repo, setRepo] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [notes, setNotes] = useState([]);


  const params = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${params.username}/${params.reponame}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setNotFound(true);
        } else {
          console.log(data);
          setNotFound(false);
          setRepo(data);
        }
      });
  }, []);

  useEffect(() => {

    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
  }, []);
 
  const handleDelete = (e) => {

    let id = e.target.value;
    console.log("my id", id);

    const filteredComments = notes.filter((note) => {
      if (note.id !== id) {
        console.log('note', note)
        return note;
      }
    });
    setNotes(filteredComments);

    const opts = {
      method: "DELETE",
    };
    fetch(`http://localhost:4000/notes/${id}`, opts)
    .then(response => response.json())
    .then(() => {
      fetch("http://localhost:4000/notes")
      .then(res => res.json())
      .then(data => {
        setNotes(data)
      })
    })
  };

  return (
    <>
      <Link className="repoLink" to={`/${params.username}`}>
        <button>{params.username}'s repos</button>
      </Link>
      {notFound ? (
        <div>
          repo '{params.reponame}' of user '{params.username}' does not exist
        </div>
      ) : (
        <>
          <div>
            <ul>
              <li>name: {repo.name}</li>
              <li>language: {repo.language}</li>
              <li>SSH: {repo.ssh_url}</li>
            </ul>
          </div>
          <div>
            <h3>Comment Section</h3>
            <Link
              state={{ notes, setNotes }}
              className={"repoLink"}
              to={`/${params.username}/${params.reponame}/notes/add`}
            >
              <button >Add a new comment</button>
            </Link>
            <ul>
              {notes
                .map(
                  (note) =>
                    note.name === `${params.reponame}` &&
                    note.username === `${params.username}` && (
                      <>
                        <li>
                          {note.comment}
                          <Link
                            className="repoLink"
                            to={`/${params.username}/${params.reponame}/notes/${note.id}/edit`}
                          >
                            <button>EDIT</button>
                          </Link>
                          <button value={note.id} onClick={handleDelete}>
                            DEL
                          </button>
                        </li>
                      </>
                    )
                )
                .reverse()}
            </ul>
          </div>
        </>
      )}
    </>
  );
}