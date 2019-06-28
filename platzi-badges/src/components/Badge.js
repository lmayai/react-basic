import React from 'react';

import logoConf from '../images/badge-header.svg';
import './styles/Badge.css'

class Badge extends React.Component{
  render() {
    return(
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoConf} alt="Logo de la conf"/>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Ricardo <br/> Manson</h1>
        </div>
        <div className="Badge__section-info">
          <h3>FrontEnd Engineer</h3>
          <div>@esparrago</div>
        </div>
        <div className="Badge__footer">#platziConf</div>
      </div>
    )
  }
}

export default Badge;