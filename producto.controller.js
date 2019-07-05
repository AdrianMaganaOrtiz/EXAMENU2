async function crearP(product,product) {
    var productoCrear = await product.crear(product)
        .then((data) => {
            console.log("Guardado Con Exito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return crearP;
}
module.exports.crearP=crearP;