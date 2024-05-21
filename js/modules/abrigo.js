 
 /*necesito una funcion para recorrer el api y extraer los items del api en este caso son abrigos*/ 
 export const getAllAbrigos=async ()=>{

    let res = await fetch("http://localhost:5501/abrigos")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            id: val.id,
            nombre: val.nombre,
            precio: val.precio
        })
    })
    return dataUpdate;
 }



