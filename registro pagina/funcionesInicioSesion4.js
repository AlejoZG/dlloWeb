let edades = []
function ordenarEdad(edad)
{
    let objeto = {
        "nombre" : document.getElementById('campoNombre').value,
        "contrasena" : document.getElementById('campoContrasena').value,
        "correo" : document.getElementById('campoCorreo').value,
        "confirmarcontrasena" : document.getElementById('campoconfirmarContrasena').value,
        "telefono" : document.getElementById('campoTelefono').value,
        "edad" : edad
    }

    if (edades.length <= 20)
    {
        edades.push(objeto);
    }
    edades.sort((x, y) => y.edad - x.edad);
    //console.log(edades);

    //promedioEdad(edades);
    return edades;
}


function verificarInicioSesion4 (correo,contrasena,edades) {

    
if (edades.includes(correo)) {
    
  
        
    if (edades.includes(contrasena)) {

       if (verificarCaptcha4(respesta)==true) {
         
            alert("ingreso exitoso")
            return true;
       }else{
        alert("captcha no valido")
        return false;
       }

        
        
    }else {
        alert("contraseña no valida")
        return false;
       
    }

    
    
}else{
    alert("correo no encontrado")
    return false;
    
}
    
}


function verificarCaptcha4(respuesta) {
    respuesta = prompt("¿En que año se dio la batalla de Boyaca? ");
    if (respuesta.toLowerCase()== "1819"){
        return true;
    
    }
    return false;
}


 module.exports.ordenarEdad = ordenarEdad;
module.exports.verificarInicioSesion4= verificarInicioSesion4;
module.exports.verificarCaptcha4= verificarCaptcha4;

