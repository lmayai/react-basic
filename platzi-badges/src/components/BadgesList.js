import React from "react";
import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

function userSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

const BadgesList = ({ badges }) => {
  const { query, setQuery, filteredBadges } = userSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="">
            <h4>Filter Badges</h4>
          </label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              setQuery(e.target.value);
            }}
            value={query}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="badges/new">
          Create a new Badge
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="">
          <h4>Filter Badges</h4>
        </label>
        <input
          className="form-control"
          type="text"
          onChange={e => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="row BadgesList">
                  <div className="col-3">
                    <Gravatar
                      className="BadgesList__image"
                      email={badge.email}
                      alt="AVATAR"
                    />
                  </div>
                  <div className="col-9 BadgesList__info">
                    <div className="BadgesList__info-name">
                      {badge.firstName} {badge.lastName}
                    </div>
                    <div className="BadgesList__info-twitter">
                      <FontAwesomeIcon icon={faCoffee} />@{badge.twitter}
                    </div>
                    <div className="BadgesList__info-jobTitle">
                      {badge.jobTitle}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BadgesList;
