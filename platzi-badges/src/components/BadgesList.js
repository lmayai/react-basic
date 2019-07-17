import React from 'react';
import './styles/BadgesList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component{
  render(){
    return (
      <div className="list-unstyled">
        {this.props.badges.map( (badge) => {
          return (
            <li key={badge.id} >
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`} >
                <div className="row BadgesList">
                  <div className="col-3">
                    <Gravatar className="BadgesList__image" email={badge.email} alt="AVATAR" />
                  </div>
                  <div className="col-9 BadgesList__info">
                    <div className="BadgesList__info-name">{badge.firstName} {badge.lastName}</div>
                    <div className="BadgesList__info-twitter"><FontAwesomeIcon icon={faCoffee}/>@{badge.twitter}</div>
                    <div className="BadgesList__info-jobTitle">{badge.jobTitle}</div>    
                  </div>
                </div>
              </Link> 
            </li>
          )
        })}
      </div>
    )
  }
}

export default BadgesList;