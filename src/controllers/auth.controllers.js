import user from "../models/user.model.js"; //esquema modelo para interactuar con la base de datos
import bcrypt from "bcryptjs"; //para encriptar strings y cosas
import { createdAccessToken } from "../libs/jwt.js"; //importo la funcion que crea los tokens

export const register = async (req, res) => {
  console.log("req.body console.log= ", req.body); //req para recibir daots res para responde con datos
  const { userName, email, password } = req.body;
  console.log("console.log= " + userName, email, password);
  try {
    const passwordHash = await bcrypt.hash(password, 10); //encripta el password ejecutando el algoritmo 10 veces me devuelve la contraseña encriptada

    const newUser = new user({
      //instaciamos un nuevo usuario
      userName,
      email,
      password: passwordHash,
    });
    console.log("instaciaNewUser", newUser);
    const userSaved = await newUser.save(); //gurdamos en la base de datos asi dew facil
    const token = await createdAccessToken({ id: userSaved._id }); //le paso el payload(lo que quiro guardar en el token) a la funcion que crea tokens
    res.cookie("token", token); //creo la cookie que contien el token para pasarlo de mejor forma al front-end (nombre, contenido)
    res.json({
      id: userSaved._id,
      userName: userSaved.userName,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    }); //me da el objeto guardado en respuesta al front end en vez de dar la respuesta asi la mando con un token de forma mas segura, estew objeto me servia para saver si el usuario ya esta autenticado

    //creo un token(un objeto encriptado) para el enviar el objeto guradado para comprobar si el usuario ya se autentico jwt.sign(valores a guardar, palabra para poder ver el token, cuanto dura el token 1d= 1 dia, callback, fujcion que se ejecuta cuando el proceso se complete), el token es como un permiso para poder entrar a la app
    /*jwt.sign(
      {
        id: userSaved._id, //objeto a guardar
      },
      "secret123", //llave para pdoer ver el objeto y guradarlo
      {
        expiresIn: "1d", //cuando expira el token 1 dia
      },
      (err, token) => {
        //cuando cree el token lo devuelve al cliente
        //err ? console.log("error", err) : res.json({token});//No es bueno enviar el token asi es mejor con una cookie, solo púedo tener un res. por funcion
        if (err) console.log("error creacion del token register: ", err);
        res.cookie("token", token);
        res.json({
          menssage: "user created succesfully",
        });
        console.log("token: ", token);
      }
    ); para que esto se vea mejor y no tan feo lo hago en un nuevo archo vo en libs, ademas de para poder usarlo varias veces donde sea*/
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
};
export const login = (req, res) => res.send("login");
