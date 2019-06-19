# react-basic
Repo to practice concepts and fundamental of REACT JS

## ¿Qué es React.js?

- React cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.

- React es declarativo, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

- JSX es HTML dentro de Javascript.
```js
//index.js
<Layout>
    <Header />
    <Blogspot post={data} /> //Componentes
    <Footer />
</Layout>
```
- React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

- Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras. 

- PROYECTO: PLATZI BADGES
Manejo de asistencia de las conferencias, crear badges de usuarios y editarlo, agregarlos y borrarlos.

## Prerrequesitos para react
- Desarrollo web online: Esto implica tener familiaridad y fortaleza en el uso de HTML y CSS.
- Javascript: React es Javascript. Es importante saber usar Javascript en el navegador. Es deseable conocer JQuery y saber sobre promesas, clases y tener conocimientos sobre asincronía.
- Terminal: La línea de comandos es indispensable para instalar herramientas, correr servidores y hacer diversas tareas.

## Herramientas
Estas son las herramientas que usaremos en el curso:
- Navegador: Especialmente Chrome ya que cuenta con óptimas herramientas de desarrollo.
- React Developer Tools: Es una herramienta Open Source creada por Facebook y tiene instalación para Chrome o Firefox. Nos dejará ver el código de React inspeccionando elementos.
- Editor de texto: Puedes usar cualquiera, en este curso sugerimos Visual Studio Code. Tiene muchos plugins útiles para el desarrollo.
- Prettier: Es un plugin que hace que el código se vea bien sin importar cómo esta escrito. Disponible para visual studio code
    - Si se quiere deshabilitar prettier, se ingresa a: 

Configuración => Extensiones => Prettier => Editar en settings.json.    "prettier.disableLanguages": ["html"]

- React-tabs: para pestañas

## Create-react-app
Es una app moderna que se usa desde la linea de comandos. Con esta app se establece todas las dependencias y entorno necesario para poder utilizar react en un proyecto.
```
$ npx create-react-app my-app
```
Las carpetas son:
- src: Todo el código fuente

Babel: Traduce el código nuevo a viejo. 
Jslint: Herramienta

- Instalar repo de platzi-badges
```
$ git clone https://github.com/Sparragus/platzi-badges.git
$ npm install
$ npm run start

```
Success! Created holamundo at E:\INFO\LEO\Leo\STUDY\PLATZI\react-basic\holamundo
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd holamundo
  npm start

Happy hacking!
```

## ReactDOM
- Sin react 
```js
const element  = document.createElement('h1');
element.innerText = 'Hola PLATZIII';
const container = document.getElementById('app');
container.appendChild(element);
```

Para agregar y quitar elementos de react hacía la vista se hace lo siguiente
```js
import React from 'react';   //analago a createElement
import ReactDOM from 'react-dom'; //analogo a appenChild
const element = <h1>Hola Bobi</h1>; // Esto es JSX
const container =  document.getElementById('app');
ReactDOM.render(element,container);
```
Donde **//ReactDOM.render( que renderizar, donde renderizar)
**
EL que renderizar es el emento que contiene un elemento html, y el donde es a que elemento se le agregará.

## JSX
JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando
sus atributos o props
y el children que es el contenido.
Ejemplo:
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

- Sin usar JSX seria:
```js
const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'HOla soy LEO'),
    React.createElement('p',{},'Soy ingeniero')
)
```
- CON JSX
```js
const jsx = ( 
    <div>
        <h1>HOla soy LEO</h1>
        <p>Soy ingeniero</p>
    </div>
);
```
JSX es JS, hace lo mismo que createElement, pero más declarativo y sencillo. Ambos tienen elmismo resultado pero es más simple JSX. JSX es lo mismo que Js, se convierte en JS usando babel react etc...

- En JSX no se muestra los valores que son falso en JS como undefined o null
```js
const elementJSX2 = <h1>HOla soy {name} suma:{sum()} {undefined} {null}</h1>
```