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
      .then((data) => setNotes(data));
  }, []);

  return (
    <>
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
              {" "}
              <button>Add a new comment</button>
            </Link>
            <ul>
              {notes
                .map(
                  (note) =>
                    note.name === `${params.reponame}` && (
                      <li>{note.comment}</li>
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
