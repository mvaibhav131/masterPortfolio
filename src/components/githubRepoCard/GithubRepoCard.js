import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} >
          <div className="repo-avatar-div">
            <img
              src={repo.poster_url}
              alt="avatar"
              className="repo-avatar"
            />
          </div>
          <div className="repo-details">
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p>
          </div>
          <div className="repo-languages">
            <ProjectLanguages logos={repo.languages} />
          </div>
          <div className="repo-buttons">
            <button className="view-project-button" onClick={() => openRepoinNewTab(repo.view_url)}>
              View Project
            </button>
            <button className="source-code-button" onClick={() => openRepoinNewTab(repo.url)}>
              Source Code
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
