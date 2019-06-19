import React from 'react';   //analago a createElement
import ReactDOM from 'react-dom'; //analogo a appenChild

import Badge from './components/Badge'
    
const container =  document.getElementById('app');

ReactDOM.render(<Badge/>,container);