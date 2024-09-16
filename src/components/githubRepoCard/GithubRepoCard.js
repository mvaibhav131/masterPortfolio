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
        <div key={repo.id}>
          {/* Conditionally render avatar */}
          {repo.poster_url && (
            <div
              className="repo-avatar-div"
              onClick={() => openRepoinNewTab(repo.view_url)}
            >
              <img src={repo.poster_url} alt="avatar" className="repo-avatar" />
            </div>
          )}
          <div className="repo-details">
            {/* Conditionally render repo name */}
            {repo.name && (
              <div className="repo-name-div">
                <p className="repo-name" style={{ color: theme.text }}>
                  {repo.name}
                </p>
              </div>
            )}
            {/* Conditionally render repo sector */}
            {repo.sector && (
              <div className="repo-sector-div">
                <p className="repo-sector" style={{ color: theme.text }}>
                  {repo.sector && `(${repo.sector})`}
                </p>
              </div>
            )}
            {/* Conditionally render repo description */}
            {repo.description && (
              <p
                className="repo-description"
                style={{ color: theme.text }}
                title={repo.description}
              >
                {repo.description}
              </p>
            )}
            {/* Conditionally render creation date */}
            {repo.createdAt && (
              <p
                className="repo-creation-date subTitle"
                style={{ color: theme.secondaryText }}
              >
                Created on {repo.createdAt.split("T")[0]}
              </p>
            )}
          </div>
          {/* Conditionally render languages */}
          {repo.languages && (
            <div className="repo-languages">
              <ProjectLanguages logos={repo.languages} />
            </div>
          )}
          <div className="repo-buttons">
            {/* Conditionally render buttons if URLs are provided */}
            {repo.view_url && (
              <button
                className="view-project-button"
                onClick={() => openRepoinNewTab(repo.view_url)}
              >
                View Website
              </button>
            )}
            {repo.url && (
              <button
                className="source-code-button"
                onClick={() => openRepoinNewTab(repo.url)}
              >
                View Code
              </button>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
