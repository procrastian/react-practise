import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Repos.css";

export default function Repos() {
  const params = useParams();
  const [repos, setRepos] = useState([]);
  const [username] = useState(`${params.username}`);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        console.log('data[0]', data[0])
        console.log('owner', data[0].owner)
        console.log('avatar_url', data[0].owner.avatar_url)
        if (data.message === "Not Found") {
          setNotFound(true);
        } else {
          setNotFound(false);
          setRepos(data);
        }
      })
  }, [])

  return (
    <>
      {notFound && <div>user '{username}' does not exist</div>}

      {!notFound && repos.length > 0 && (
        <>
         <h4>{username}'s Repos</h4>
      <img alt={"avatar"} src={`${repos[0].owner.avatar_url}`} />
      </>
      )}

      {repos.map((repo) => (
        <div>
          <Link className={"repoLink"} to={`/${username}/${repo.name}`}>
            {repo.name}
          </Link>
        </div>
      ))}
    </>
  );
}
