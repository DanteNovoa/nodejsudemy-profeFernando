const fs = require('fs');

let base = 4;
let data ='';


for (let i = 1; i <=10; i++) {
    data +=`${base} * ${ i } = ${base * i}\n`;
    
}

fs.writeFile(`tabla del ${base}.txt`, data, (err) =>{
    if(err) throw err;
    console.log(`El archivo tabla del ${ base} ha sido creado`);
});