import React from "react";

export default function RepoCard(props) {

  return (
    <div className="repoCard">
      <h2><a href={props.repo.url}>{props.repo.name}</a></h2>
      <p>{props.repo.description}</p>

      <p>
        <span>
          <svg viewBox="0 0 10 10" className={`languageBlob color${props.repo.language}`}>
            <circle cx="5" cy="5" r="3"/>
          </svg>
        </span>
        <span>{props.repo.language}</span>
      </p>
      {props.repo.forks > 0 ? <p>{props.repo.forks}</p> : <></>}
    </div>
  )
}
