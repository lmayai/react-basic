import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Home.css'; 
import astronuataLogo from './../images/astronauts.svg';
import platziConfLogo from './../images/platziconf-logo.svg';

class Home extends React.Component{
  render(){
    return (
      <React.Fragment>
        <div className="row Home">
          <div className="col-4 Home__info">
            <img className="Home__platzi-logo" src={platziConfLogo} alt=""/>
            <h3>Print your Badges</h3>
            <h5>The easiest way to manage your</h5>
            <Link className="btn btn-success" to="/badges">
              Start Now
            </Link>
          </div>
          <div className="col-8 Home__logo">
            <img className="Home__astro-logo" src={astronuataLogo} alt=""/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;