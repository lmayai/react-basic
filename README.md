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

## ReactDOM RENDER

```
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
Donde **//ReactDOM.render( que renderizar, donde renderizar)**
EL que renderizar es el elemento que contiene un elemento html, y el donde es a que elemento se le agregará.

## JSX
JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando
sus atributos o props
y el children que es el contenido.
Ejemplo:
```js
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

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
);
```



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
const sum = ()=> 3+3;
const elementJSX2 = <h1>HOla soy {name} suma:{sum()} {undefined} {null}</h1>
```

## Que es un componente
Atomos, conjuntos -- personas.
Los componentes son los bloques de contruccion, como legos. Estos forman las websites completas.

- Componentes vs elemento: CAsa es un elemento, su componentes es el plano de construcción. Un elemento es a un objeto como un componente es a una clase. 
En JSX si estan en brakets son elementos, sino son componentes.

- Como identificar los componentes.
    - Elementos que se repiten: Por ejemplo en la pagina de airbnb. Los elementos que se repiten son las casas. Luego cada una de estas casa listadas es un componente con una especificación. Cada componente tendrpa definido una foto, una descripción y un precio.
    - Elementos que cumplen una función especifica: Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar. Por ejemplo: una barra de búsqueda al buscar los sitios.

Los componentes son la unidad básica de desarrollo, al juntarlos se crean apps completas.

### Escribiendo componentes.
- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
La carpeta se ubicará en src/componentes.

- Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
- El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

- Un componente básico tiene:
```js
import React from 'react';

class Badge extends React.Component{
  render() {
    return(
      <h1>Badges</h1>
    )
  }
}

export default Badge;
```
Se observa que cada componente debe importar de 'react'. Debe conteer el método *render()* el cuál retorna componentes HTML con jsx. Siempre al final debe exportarse el componente, el cuál es definido con una clase que es heredada de React.Component

Luego para agregar el componente en mi página principal.
```js
import Badge from './components/Badge'
const container =  document.getElementById('app');
ReactDOM.render(<Badge/>,container);
```
Es importante siempre al reactDom darle un componente, por eso se usa <Componente/>

### Estilos
Dentro de /componentees  se crea una carpeta styles, donde se guardaran los estilos.
-  Para agregar un estilo a un componente se hace:
```js
// En Badge.js
import './styles/Badge.css'
```
Ahora se le deben poner las clases de los estilos. Debe usarse **className** no **class**
```js
<div className="Badge">
```
- Para usar bootstrap
```
npm install bootstrap
```
Para importar bootstrap en index.js
```js
import 'bootstrap/dist/css/bootstrap.css'
```
```js```
```js```
```js```

### Props
Los props. son los argumentos a una función, lo que serián los atributos a los componentes como class, src, etc.
Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().
- Los props se envian desde el render hacía el componentes
```js
// En index.js
ReactDOM.render(<Badge firstName='Richard' lastName='Buble' />,container);
```
- Luego para usarlo en el componente se usa ***this.props***
```js
// En Badge.js
<h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
```
Por tal se enviaron 2 propiedades, las cuales son *firstName* y *lastName*. Estas se leen con this.props

### Páginas
Las páginas son como componentes, con la diferencia que es un componente con otros componentes adentro.
- Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.

Por ejemplo una página puede renderizar a más de un componente. Por ejempo en *BadgeNew.css* Donde luego este BadgeNew es renderizado por el index.

### Eventos
- React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
- Los elementos button también tienen un evento que es onClick.
- Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit

Dentro del componente, un método se usarpa para manejar los eventos
```js
handleChange = (event) => {
    console.log({
      value: event.target.value,
      name: event.target.name,
    });
}
```
Se coloca donde se quiere manejar el evento onChange
```js
<input onChange={this.handleChange} className="form-control" type="text" name="" id=""/>
```
Cuando hay un botón dentro de un formulario, es de tipo submit, se puede:
- Hacer el boton que no sea de tipo submit
```js
//Especificar que es de tipo button
<button onClick={this.handleClick} className="btn btn-primary">Save</button>
```
- O se puede agregar al evento del submit el preventDeafault() para que no se recargue.
```js
handleSubmit = (event) => {
  event.preventDefault();
}
. . . 
<form onSubmit={this.handleSubmit}>
```

### Masnejo de estados
Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.

Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

- Para almacenar la informacion se usa setState, el cual guarda un objeto así: Desde el handleChange.
```js
this.setState({
  popiedad : event.target.value,
})
```
- Debido a que se hace una copia del elemento, lo que hace pasar los inputs de no controlados a controlados, al setear el this.state para leerlo.
```js
this.setState({
  [event.target.name]: event.target.value,
})
. . .
<div className="form-group">
  <label htmlFor="">First Name</label>
  <input 
    onChange={this.handleChange} 
    className="form-control" 
    type="text" 
    name="firstName" 
    value={this.state.firstName}/>
</div>
```
- Para no obtener un error es necesario inicializar el *state* así dentro del component.
```js
class BadgeForm extends React.Component {
  state = {
    jobTitle: 'Designer',
  };
  . . . 
}
```
En el anterior solo se inicializa la propiedad firstName

- Al enviar el formulario se puede observar la información enviada en el evento del botón:
```js
handleSubmit = (event) => {
  console.log('Button submitted');
  event.preventDefault();
  console.log(this.state)
}
```
Resumen:El *state* se uso para almacenar toda la información enviada con el formulario. Con el *setState* se guardó la información la cual fue enviada con el manejador de eventos *onChange*

### Levantamiento del estado
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

- Esto es una técnica necesaria para poder compartir el state de los componentes. Si se quiere compartir desde el BadgeForm(hijo) al BadgeNew(Padre).
Primero se incializa el *state* y el *handleChange* desde el padre
```js
state = {form:{}}

handleChange = e => {
  this.setState({
    form: {
      [e.target.name]:e.target.value,
    },
  });
}
```
Luego el onChange se refiere al componente, donde se pasa como parámetro hacía el componente:
```js
<BadgeForm
  onChange = {this.handleChange}
/>
```
Por tal si cambia dentro del componente, cambia en el padre.
- Luego en el hijo ya se refiere el onChange con props.
```js
<div className="form-group">
  <label htmlFor="">First Name</label>
  <input 
    onChange={this.props.onChange} 
    className="form-control" 
    type="text" 
    name="firstName" 
    value={this.state.firstName}/>
</div>
```
- Para evitar que siempre que se cambia un input se sobreescriba el form, se debe hacer una copia del form en el padre. O también se puede hacer una concatenación del form. Para esto seusa un spread operator.
```js
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]:e.target.value,
      },
    });
  }
```
- Lo siguiente es tomar los valores del form, enviandolo del padre al hijo
```js
<BadgeForm
  onChange = {this.handleChange}
  formValues = {this.state.form}
/>
```
- Y desde el hijo se leen así:
```js
<div className="form-group">
  <label htmlFor="">First Name</label>
  <input 
    onChange={this.props.onChange} 
    className="form-control" 
    type="text" 
    name="firstName" 
    value={this.props.formValues.firstName}/>
</div>
```
Para evitar el warning en consola
*index.js:1446 Warning: A component is changing an uncontrolled input of type text to be controlled* Se debe incializar cada uno de los values
```js
state = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  }
};
```

### Listas
La implementación de una lista sería usando *map*:
```js
<div className="list-unstyled">
  {this.props.badges.map( (badge) => {
    return (
      <li key={badge.id} >
      </li>
    )
  })}
</div>
```
Siempre en las listas es importante usar el atributo key, que defina que el elemento es único.

### PAra usar fontawesome con react
https://github.com/FortAwesome/react-fontawesome

## React Router
LAs apps en react, son frecuentemente *Single web app(SPA)*.
Con react router(open source) es posible trabajar SPA

Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página. Por cada peticion se obtiene todos los datos.

Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían. No necesita pedir todos los datos, sino solo los necesarios.

Se usan 4 componentes:
- BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
- Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL

### División de la app en rutas.
```
$ npm install react-router-dom
```
Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

- Para implementar React Router, se declara un componente el cual es quién renderizar según la ruta y además es el que tiene el nivel más alto. App.js
- Dentro de este se agregan componente de react router así:
```js
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from './../pages/Badges';  
import BadgeNew from './../pages/BadgeNew';
```
- Luego en el componente se agregan las rutas así:
```js
function App () { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}
```
Donde: BrowseRouter es el elemnto con las rutas. Switch permite que a la primera coincidencia, sea esa ruta la renderizada. Se le pone el atributo exact para que la ruta coincida completamente y no parcialmente. En component se renderiza el componente particular
- Si se usan botones que funcionan para llevar a una página en particular, se cambia **a** por **link** así:
```js
<a className="btn btn-primary" href="/badges/new">
  New Badges
</a>
// Por esto
<Link className="btn btn-primary" to="/badges/new">
  New Badges
</Link>
```
Se puede apreciar que la página luego de presionar el botón no carga completamente, sino parcialmente. Lo cuál mejora la experiencia de usuario. Esto es una SPA(single page app)

### Uso del Layout
- React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

- El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:
```js
import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />
```
Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

## Ciclo de Vida de componentes
Cuando un componente se renderiza se dice que entra en escena, luego si cambia o recibe unos props se actualiza y cuando se cambia de ppágina se desmonta.

- Montaje: Es cuando el componente se inserta en el DOM. Lo método que se llaman son: *constructor*(inicializar), *render*(preciso), *componentDidMount*(señal de que es visible).
- Actualización: Vuelve a renderizarse. Se usan: *render*, *comoponentDidUpdate*(propsPrevios, estadoPrevio).
- Desmontaje: Cuando el componente sale de escena. Se llama: *componentWillUnmount*.

Dentro de los componentes es posible utilizar todos estos meétodos. Desde la consola se ve lo siguiente, simulando una petición asíncrona y luego abandonando la página:
```
Se llama al constructor
Se llama al Render
Se llama al ComponentDidMount
Se llama al Render
Se llama al ComponentDidUpdate
{prevPops: {…}, prevState: {…}}
{props: {…}, state: {…}}
...
Se llama al ComponentWillUnmount
```
Ahora si se deja la página antes que se complete una petición asíncrona, se debe hacer clearTimeout para evitar errores.
```js
  componentDidMount(){
    console.log('Se llama al ComponentDidMount');
    this.timeoutId = setTimeout(() => {
      this.setState({...
      });
    }
  }

  componentWillUnmount(){
    console.log('Se llama al ComponentWillUnmount');
    clearTimeout(this.timeoutId);
  }
```

## Llamadas a una API
Tiene 3 estados:
- Loading: Cuando se envía y se espera la petición
- Error: Se deja un mensaje al usuario para arreglar el error o volver a intentarlo. Error 404: datos que no existen.
- Data: Llegan de 2 formas, o con error(vacio) o con los datos requeridos.

### Ejemplo: https://rickandmortyapi.com/
- https://rickandmortyapi.com/api/character/

### Peticiones tipo GET
En el state se ponen 3 datos. Loading, error y data.
```js
state = {
  loading: true,
  error: null,
  data: undefined,
};
```
- Lo primero que debe hacer nuestro render(), ya que el dato es undefined es manejar si la app está en loading
```js
if(this.state.loading === true){
  return 'Loading ...'
}
```
- Siempre las peticiones se deben hacer en el componentDidMount.
```js
componentDidMount () {
  this.fetchData();
}

fetchData = async () => {
  this.setState({
    loading: true,
    error: null,
  });

  try{
    data = await fetch('url')
    //peticion se toma la data
    // Loading en false
  }catch(error){
    //error, 
    // loading en false
  }
}
```
- Luego en el método render se debe verificar que exista un error y que además los datos no estén vacios.
```js
if(this.state.error){
  return(
    <div>
      <h2>Ha ocurrido un error: {this.state.error.message}</h2>
    </div>
  )
}

if( this.state.data.length === 0){
  return(
    <div>
      <h3>No se encontró ningún badge</h3>
      <Link to='/badges/new' className="btn btn-primary">Agregar Badges</Link>
    </div>
  )
}
```

### Peticiones tipo POST
MD5 es una pequeña librería a la cual se le da un texto y ella regresa un hash.

Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio MD5 Online

Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c

```
$npm install md5
```
- Para manejar un error y usar un condicional:
```js
{ this.props.error &&
  <p className="text-danger">{this.props.error.message}</p>
}
```
Lo anterior significa que si existe ele error, entonces, despliega un párrafo
- Si una petición es correcta, dentro del try-catch, es posible usar un prop de las páginas para redirigir la página con react-router.
```js
this.props.history.push('/badges');
```
De la misma manera en la que se manejan los estados cuando se solicitan datos, deben ser manejados cuando los datos son enviados.

Existe un tiempo entre que se da clic y los datos son enviados. Ese tiempo de espera es necesario visualizarlo. Igual hay que mostrar mensajes de error cuando no funcionan las cosas.

### Peticiones PUT
Usadas para actualizar(editar datos), incluyen un get y luego un put.
- Se creo la pagina BadgeEdit.js como componente. Se puso la ruta en el react router así:
```js
<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
```
Donde :BadgeId es referente a cada persona.
- Como la edición va a ser enviada desde los BAdges, se pone un link con el ID desde BadgesList
```js
<Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`} >
 // Todo lo referente al CARD
</Link>
```
- Luego en el edit se hace una petición para obtener la información del personaje así:
```js
componentDidMount(){
  this.fetchData();
}

fetchData = async e => {
  this.setState({ loading: true, error: null });
  try {
    const data = await api.badges.read(
      this.props.match.params.badgeId
    );
    this.setState({ loading: false, form: data });
  } catch (error) {
    this.setState({ loading: false, error: error });  
  }
}
```
Se observa que **this.props.match.params.badgeId** se puede obtener gracias al react-router, ya que en params se envía y se pueden los valores enviados al dirigirse a una ruta. Con este se obtiene el ID enviado. La información obtenida se guarda en el state.form, para poder llenar los valores a editar.
- Luegoen la edición, cuando se haga un submit, se hace un update a la api así. Esto es asíncrono.
```js
handleSubmit = async e => {
  e.preventDefault();
  this.setState({ loading: true, error: null });
  try {
    await api.badges.update(this.props.match.params.badgeId, this.state.form);
    this.setState({ loading: false });
    this.props.history.push('/badges');
  } catch (error) {
    this.setState({ loading: false, error: error });
  }
}
```

### Actualizaciones automáticas
*Polling* consiste en que cada cierto tiempo que es definido por nosotros se buscan los datos y se actualizan automáticamente. Esto se hará constantemente hasta que el usuario se vaya de la página.
- Para usarlo se usa un setInterval.
```js
componentDidMount () {
  this.intervalId = setInterval(this.fetchData, 5000);
}
```
- Luego para evitar colapsos de memoria, se debe limpiar el intervalo. Esto se hace en el componentWillUnmount
```js
componentWillUnmount(){
  clearInterval(this.intervalId);
}
```
```js```
```js```
```js```
```js```
```js```











-------------------------------------------------------------------
-- PAQUETES INSTALADOS
https://material-theme.site/
https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-
https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete
https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es
- Se agrega al settings.json de vscode
```js
"emmet.syntaxProfiles": {
        "javascript":"jsx"
},
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
},
"emmet.triggerExpansionOnTab": true
```