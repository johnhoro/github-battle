import React from "react";

function Card(props) {
  return (
    <>
      <div className="container flex wrap">
        {props.allCard.map((a, i) => (
          <div className="card flex-30">
            <div className="num">
              <span className="number">{`#${i + 1}`}</span>
            </div>
            <div className="img">
              <img
                className="img-width"
                src={`${a.owner.avatar_url}`}
                alt={`${a.id}`}
              />
            </div>
            <h3 className="text">{a.name}</h3>
            <ul>
              <li>
                <span className="profile">
                  <i class="fas fa-user"></i>
                </span>
                <span className="p-text">{a.name}</span>
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-star"></i>
                </span>
                <span className="s-text">{a.stargazers_count} stars</span>
              </li>
              <li>
                <span className="share">
                  <i class="fas fa-share-alt"></i>
                </span>
                <span className="s-text">{a.forks_count} forks</span>
              </li>
              <li>
                <span className="triangle">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span className="s-text">
                  {a.open_issues_count} open issues
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
