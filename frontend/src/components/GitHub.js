import React, { useEffect, useState } from "react";

function GitHub() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME")
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  if (!profile) return <p className="output">Loading GitHub data...</p>;

  return (
    <section className="section">
      <p className="command">adhil@devops:~$ github --stats</p>

      <div className="card">
        <p>Username: {profile.login}</p>
        <p>Public Repos: {profile.public_repos}</p>
        <p>Followers: {profile.followers}</p>
        <p>Following: {profile.following}</p>

        <a href={profile.html_url} target="_blank" rel="noreferrer">
          <button>View GitHub Profile</button>
        </a>
      </div>
    </section>
  );
}

export default GitHub;