import React from 'react';   //analago a createElement
import ReactDOM from 'react-dom'; //analogo a appenChild

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'
    
const container =  document.getElementById('app');

ReactDOM.render(
  <Badge 
    firstName='Richard' 
    lastName='Buble' 
    jobTitle='FrontEnd Engineer' 
    twitter='esparrago'
    avatarUrl='https://www.gravatar.com/avatar?d=identicon'
  />,
  container);