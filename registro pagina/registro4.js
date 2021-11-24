var edades=[]
function recibirEdad() {
  let edad;
  edad = prompt("Digite su edad: ");
  edades.push(edad);

  console.log(edades);
  return edad;
  
}
console.log(edades);
function ordenarEdad(edades) {
  

 
  console.log(edades.sort((a,b)=>{return a-b}));
 // objeto.edad.push(ordenar);
  // return ordenar;
}

function promedioEdad(args) {
  let cont = 0;
    for (var x in args)
    {
        cont = parseInt(cont) + parseInt(args[x]["edad"])
    }
    let promedio = cont / args.length
    //console.log("Promedio: " + promedio);
    return promedio;
  

}

//module.exports.recibirEdad= recibirEdad;
//module.exports.ordenarEdad= ordenarEdad;
//module.exports.promedioEdad= promedioEdad;

