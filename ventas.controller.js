async function create(product,Product) {

    var product = {
        product: product
    };

    var productCreated = await productController.create(product, Product);
    product["product"] = productCreated._id;
    var ventaCreated = await Venta.create(venta)
        .then((data) => {
            console.log("VENTA GUARDADA!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return ventaCreated;
}