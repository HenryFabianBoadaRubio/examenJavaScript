


/*realizar la consulta para la extraccionde datos y la imagen del json camiseta*/


export const getAllCamisetas=async ()=>{
    let res = await fetch("http://localhost:5501/camisetas")
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