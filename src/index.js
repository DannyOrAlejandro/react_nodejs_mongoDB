//arranque de la aplicacion
//Para configurar el codigo de express
import express from 'express'; //agregar esta propiedad al package.json para que me reciba el import de ECMA-script6 y no usar requiere.  "type":"module", "dev":"nodemon src/index.js" instalar nodemon y ecribir este comando en el package.json para que funcione como in liveserver, morgan para poder ver las peticiones que llegan al backend
import morgan from 'morgan';
 const app=express();
 app.use(morgan('dev'));
 app.listen(3000);
 console.log('server on port', 3000);