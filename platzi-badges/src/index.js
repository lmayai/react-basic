import React from 'react';   //analago a createElement
import ReactDOM from 'react-dom'; //analogo a appenChild

const elementJSX = <h1>Hola Bobi</h1>; // Esto es JSX
const element = React.createElement(
    'a',
    { href:'https://platzi.com'},
    'HOla soy el children'
);

var name = 'LEO';
const element2 = React.createElement(
    'h1',
    {},
    `HOlaaa ${name}`
)

const sum = ()=> 3+3;

//CON JSX
const elementJSX2 = <h1>HOla soy {name} suma:{sum()} {undefined} {null}</h1>
const container =  document.getElementById('app');

const jsx = ( 
    <div>
        <h1>HOla soy LEO</h1>
        <p>SOy ingeniero</p>
    </div>
);
// Lo mismo con CreateElement
const element3 = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Soy Leo'),
    React.createElement('p',{},'Soy ingeniero')
)
// Más facil con JSX

ReactDOM.render(element3,container);