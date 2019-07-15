import React from 'react';
import './styles/BadgesList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class BadgesList extends React.Component{
  render(){
    return (
      <div className="list-unstyled">
        {this.props.badges.map( (badge) => {
          return (
            <li key={badge.id} >
              <div className="row BadgesList">
                <div className="col-3">
                  <img className="BadgesList__image" src={badge.avatarUrl} alt="AVATAR"/>
                </div>
                <div className="col-9 BadgesList__info">
                  <div className="BadgesList__info-name">{badge.firstName} {badge.lastName}</div>
                  <div className="BadgesList__info-twitter"><FontAwesomeIcon icon={faCoffee}/>@{badge.twitter}</div>
                  <div className="BadgesList__info-jobTitle">{badge.jobTitle}</div>
                </div>
              </div>
            </li>
          )
        })}
      </div>
    )
  }
}

export default BadgesList;