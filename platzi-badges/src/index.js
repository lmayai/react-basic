import React from 'react';   //analago a createElement
import ReactDOM from 'react-dom'; //analogo a appenChild

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
//import Badge from './components/Badge'
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';    

const container =  document.getElementById('app');

ReactDOM.render(
  // <BadgeNew />,
  <Badges />,
  container);