import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [notes, setNotes] = useState([]);
  const params = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
    console.log(notes);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ comment });

    /* const newComment = notes.map((item) => {
      if (item.comment === comment) {
        return {
          ...comment,
          comment:  {comment} ,
        };
      } else {
        return item;
      }
    }); */

    const opts = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: `${comment}`,
      }),
    };

    fetch(`http://localhost:4000/notes/${params.id}`, opts)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
    navigate(`/${params.username}/${params.reponame}`);
  }

  const changeComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  return (
    <>
      {notes.map(
        (note) =>
          note.name === `${params.reponame}` &&
          note.username === `${params.username}` &&
          note.id.toString() === `${params.id}` && (
            <>
              <form onSubmit={handleSubmit}>
                <textarea
                  onChange={changeComment}
                  type="text"
                  rows={10}
                  cols={30}
                  defaultValue={note.comment}
                  value={comment}
                />
                <br />
                <button type="submit">Update</button>
              </form>
            </>
          )
      )}
    </>
  );
}

export default Edit;
