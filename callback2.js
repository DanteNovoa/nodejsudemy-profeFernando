let empleados = [{
    id : 1,
    nombre: "Dante"
},{
    id : 2,
    nombre: "Fernando"
},{
    id : 3,
    nombre: "Juan"
}];

let salarios = [{
    id: 1,
    salario : 2000
}, {
    id: 2, 
    salario : 3000
}];

let getEmpleado = (id, callback) =>{
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadoDB) {
        callback(`No existe un empleado con ese ID ${ id}`)
        
    } else {
       callback(null, empleadoDB) 
    }

}

let getSalario = (empleado, callback) =>{
    let salarioEm = salarios.find(salario => {
        return salario.id===empleado.id;
    })

    if (!salarioEm) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
        
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioEm.salario,
            id: empleado.id
        });
    }

}

getEmpleado(3, (err, empleado) => {
    if (err) {
       return console.log( err); 
    }

    getSalario(empleado, (err, resp) =>{
        if (err) {
           console.log(err); 
        };

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
});

