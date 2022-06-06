function CarritoDeCompras(){

    // En este array vacio despues se van a agregar las compras con el push
    this.compra = [];

    // Metodo con push para agregar la copra
    this.agregarCompra = function (compra){this.compra.push(compra)}

    // Metodo para calcular el precio total de la compra del carrito
    this.calcularTotal = function (){
        var resultado = 0;
        for (i=0 ; i<this.compra.length; i++) {
            resultado = resultado + this.compra[i].precioTotal ;
        }
        return resultado;
    }
}

// funcion para crear la compra

function Compra(producto, cantidad){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precioTotal = producto.precio*cantidad;

    this.agregarAlCarrito = function(carritoDeCompras){carritoDeCompras.agregarCompra(this)}
} 

// funcion para crear cada orden

function Orden(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
} 

var ordenEmpanadas = new Orden ("docena de empanadas", 22);
console.log(ordenEmpanadas);
var ordenTortilla = new Orden ("tortilla de papa", 15);
console.log(ordenTortilla);
var ordenPastel = new Orden ("pastel de papa", 11);
console.log(ordenPastel);
var ordenSandwich = new Orden ("Sandwich de Milanesa", 13);
console.log(ordenSandwich);
var ordenSandwich = new Orden ("Ensalada Cesar", 10);
console.log(ordenSandwich);
var ordenPicada = new Orden ("Picada vegetariana", 21);
console.log(ordenPicada);
var ordenPicadaclasica = new Orden ("Picada clasica", 30);
console.log(ordenPicadaclasica);
var ordenBurger = new Orden ("Hamburguesa vegetariana", 25);
console.log(ordenBurger);

var compra1 = new Compra(ordenEmpanadas, 22);
var compra2 = new Compra (ordenTortilla, 11);

var carritoDeCompras = new CarritoDeCompras();
carritoDeCompras.agregarCompra(compra1);
carritoDeCompras.agregarCompra(compra2);

console.log("Carrito de compras: ", carritoDeCompras);
console.log("El precio total es: ", carritoDeCompras.calcularTotal());


// MODAL CON DOM 

function OpenModal(){
    var modal = document.getElementById("Modal");
    modal.style.display="block";
}

function CloseModal(){
    var modal = document.getElementById("Modal");
    modal.style.display="none";
}