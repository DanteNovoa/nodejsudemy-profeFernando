setTimeout(() => {
    //    console.log("hola mundo");
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Dante",
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id}, no està disponible`);
    } else {

        callback(null, usuario);
    }


}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de base de datos", usuario);
});