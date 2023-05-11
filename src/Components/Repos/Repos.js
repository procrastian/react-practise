import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Repos.css";

export default function Repos() {
  const params = useParams();
  const initialFormData = {
    github: `${params.username}`,
  };
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState(`${params.username}`);
  const [formData, setFormData] = useState(initialFormData);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setNotFound(true);
        } else {
          setNotFound(false);
          setRepos(data);
          console.log(data);
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(formData.github);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, github: e.target.value });
  };
  console.log(repos[0].name);
  console.log(typeof repos[0]);

  return (
    <>
      {notFound && <div>user '{username}' does not exist</div>}
      {!notFound && <h4>{username}'s Repos</h4>}
      {/* <img alt={"avatar"} src={`${repos[0].owner.avatar_url.value}`} /> */}

      {/* console.log({repos[0].owner.avatar_url.value}) */}
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
