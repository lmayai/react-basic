import React from 'react';

import logoConf from '../images/badge-header.svg';

class Badge extends React.Component{
  render() {
    return(
      <div>
        <div>
          <img src={logoConf} alt="Logo de la conf"/>
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Ricardo <br/> Manson</h1>
        </div>
        <div>
          <p>FrontEnd Engineer</p>
          <p>@esparrago</p>
        </div>
      </div>
    )
  }
}

export default Badge;