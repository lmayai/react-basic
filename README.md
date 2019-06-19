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

## 