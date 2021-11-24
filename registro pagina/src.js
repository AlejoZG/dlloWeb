let operaciones = [];

let balance = 0;

const registrarOperacion=(monto,tipo,categoria,fecha)=> {
    // var monto = document.getElementById("monto").value;
    // var tipo = document.getElementById("tipo").value;
    // var categoria = document.getElementById("categoria").value;
    // var fecha = document.getElementById("fecha").value;
    
    let operacion = {

        monto: monto,
        tipo: tipo,
        categoria: categoria,
        fecha: fecha 
    }

    operaciones.push(operacion);
    //console.log(operaciones);
 
    monto = parseInt(operacion.monto);
    //console.log(monto);
    if (operacion.tipo == "ingreso") {
        balance = balance + monto;
    }else{
        if (operacion.tipo =="gasto") {
            balance = balance - monto;
        }
    }

    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("operaciones", JSON.stringify(operaciones));
   

}


let metaAhorro 
const registrarMetaAhorro = (meta)=> {
    localStorage.setItem("metaAhorro ", JSON.stringify(meta));
}


const  estaMiMetaCumplida =()=> {
    
    if (metaAhorro<balance) {
        
        return "no cumple"
        //alert(cumple)
    }else {
        return "cumple"
        //alert(noCumple)
    }
}

 module.exports.registrarMetaAhorro = registrarMetaAhorro; 
 module.exports.estaMiMetaCumplida = estaMiMetaCumplida;
 module.exports.registrarOperacion= registrarOperacion;

 