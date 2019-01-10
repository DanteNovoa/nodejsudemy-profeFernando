/*function sumar(a, b){
    return a + b ;
}*/


/*let sumar = (a, b) =>
     a + b;*/

let sumar = (a, b) =>{
    return a + b;
}

let saludar = ()=> {
    return "hola mundo";
}

let saludarTemplate = nombre =>{
    return `Hola ${nombre}`

}

let saludar2 = () => "hola mundo";

console.log(saludar2());
console.log(saludarTemplate("Mundo"));

let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder: 'Regeneracion',
    getNombre () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`

    }
};
console.log(deadpool.getNombre());