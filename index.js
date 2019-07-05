const productoController = require("./producto.controller");
const ventasController = require("./ventas.controller");

var mongoose = require("mongoose");
var productoSchema = require("./producto.model");
var ventaSchema = require("./ventas.model");


mongoose.connect('mongodb://localhost:27017/EXAMENU2', { useNewUrlParser: true }); 
var Producto = mongoose.model('Producto', productoSchema, 'producto');
var Venta = mongoose.model('Venta', ventaSchema, 'venta');

async function crearProducto(){
    var producto = {
        nombre:"tablet",
        precio:2500,
        cantidad:10,
        min:5,
        max:10,
        costo:2000
    }
    var crearproducto = await productoController.crearP(producto,Producto);
    console.log("Producto Creado");
    console.log(crearproducto);
}
