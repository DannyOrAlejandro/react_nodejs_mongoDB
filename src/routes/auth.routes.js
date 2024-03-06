//creo las rutas del proyecto, en controller digo que se va hacer o mostrar cuando visiten las rutas
import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js";
const router=Router();
router.post("/register",register);//cuado de haga una peticion post(visiten la pagina) /register va ejecutar la funcion register
router.post("/login",login);
export default router;//para que esto sirve lo tengo que añadir al archivo de arranque index.js