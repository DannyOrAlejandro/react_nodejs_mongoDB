//arranque de la aplicacion
//Para configurar el codigo de express
import express from "express"; //agregar esta propiedad al package.json para que me reciba el import de ECMA-script6 y no usar requiere.  "type":"module", "dev":"nodemon src/index.js" instalar nodemon y ecribir este comando en el package.json para que funcione como in liveserver, morgan para poder ver las peticiones que llegan al backend
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./db.js";
const app = express();
app.use(express.json()); //para poder recibir objetos json
app.use(morgan("dev"));
app.use("/api",authRoutes);//para que todas las rutas de autRoutes usen /api antes pork que va a usar react
connectDB();
app.listen(3000);
console.log("server on port", 3000);
