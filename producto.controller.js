async function crearP(product,product) {
    var productoCreated = await product.create(product)
        .then((data) => {
            console.log("Guardado Con Exito");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return productoCreated;
}
module.exports.crearP=crearP;