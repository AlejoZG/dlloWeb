const registrarOperacion = async(monto,tipo,categoria,fecha) => {

    let response = await fetch ("https://misiontic2022upb.vercel.app/api/personal-finance/operations"
    
    
    ,{
        method: "POST",
        headers: {

            "Accept": "application/json",
            "Content-Type": "application/json"

        },
        body: monto,tipo,categoria,fecha
        
    });
     // return "Operación creada satisfactoriamente, desafortunadamente esta es una API fake, y no hay efecto real sobre las operaciones"
    return response;
    
    
}


const estaMiMetaCumplida = async(meta)=> {

    let response = await fetch ("https://misiontic2022upb.vercel.app/api/personal-finance/is-my-goal-achieved/4000")

    let estaMiMetaCumplida = await response.json();

    return estaMiMetaCumplida;
}
module.exports.estaMiMetaCumplida = estaMiMetaCumplida;
module.exports.registrarOperacion= registrarOperacion;