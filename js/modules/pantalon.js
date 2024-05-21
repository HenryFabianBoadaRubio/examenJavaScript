

/*realizar la consulta para la extraccionde datos y la imagen del json pantalon*/

    export const getAllPantalones=async ()=>{
        let res = await fetch("http://localhost:5501/pantalones")
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