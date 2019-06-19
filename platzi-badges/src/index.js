// HAY 2 maneras con o sin react.

// Con document.
/*const element  = document.createElement('h1');
element.innerText = 'Hola PLATZIII';
const container = document.getElementById('app');
container.appendChild(element);*/
//Creaa imports con webpack

// Con react
import React from 'react';   //analago a createElement
import ReactDOM from 'react-dom'; //analogo a appenChild

const element = <h1>Hola Bobi</h1>; // Esto es JSX
const container =  document.getElementById('app');

// No usar el appendChild
//ReactDOM.render( que renderizar, donde renderizar)
ReactDOM.render(element,container)