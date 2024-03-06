import { TOKEN_SECRET } from "../config.js"; //configuracion del key token
import jwt from "jsonwebtoken"; //para crear un token
export function createdAccessToken(payload) {//esta funcion me tiene que retornar algo
  return new Promise((resolve, reject) => {
    //para transformarlo en una promesa y poder usar async await. reject=tod salio mal, resolve=todo salio bien
    jwt.sign(
      payload, //objeto a guardar
      TOKEN_SECRET, //llave para pdoer ver el objeto y guradarlo
      {
        expiresIn: "1d", //cuando expira el token 1 dia
      },
      (err, token) => {
        err ? reject(err) : resolve(token);
      }
    );
  });
}
//jwt.sign mejor explicado en auth.controllers.js
