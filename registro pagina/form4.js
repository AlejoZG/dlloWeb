function validar_nombre(){
    let campoNombre=document.getElementById("campoNombre").value;
    if (campoNombre.length==0){
        alert("no vacio")
        return false
    }if (campoNombre.length<4||campoNombre.length>30){
        alert("verifique lon")
        return false;  
    }if(campoNombre.match(/[^A-Za-z]/)){
        alert("falso no permite caracteres espe")
        return false;
    }else{
        alert("bien")
        return true;
    }
}

function validar_contrasenas(contrasena,confirmar_contrasena) {
    //var contrasena= document.getElementById("campoContrasena").value;
    //var confirmar_contrasena= document.getElementById("campoconfirmarContrasena").value;
    if (contrasena.length!="" && confirmar_contrasena.length!= "") {// verifica si las claves son diferentes a vacio
        
         if(contrasena.length== confirmar_contrasena.length){ // verifica si las claves son de igual longitud

               if (contrasena===confirmar_contrasena) { // verifica si las claves son diferentes
                    
                  return true;
            
            
               } else{
                   return false; //retorna verdadero si las claves  son iguales


                   
               }





         }else{ 

            return false;  // retorna falso si no son de igual longitud
         }




    }else{
        return false; // retorna falso si las claves estan vacias
    }
    
    
    
    
    /*else if(contrasena.length!== confirmar_contrasena.length){
       // alert("las claves deben de ser de igual longitud")
        return false
    }else if (contrasena!==confirmar_contrasena){
       // alert("las claves no son iguales")
        return false;
    }else{
       // alert("clave correcta")
        return true;
    }
   */
    
}

module.exports.validar_nombre=validar_nombre;
module.exports. validar_contrasenas= validar_contrasenas;