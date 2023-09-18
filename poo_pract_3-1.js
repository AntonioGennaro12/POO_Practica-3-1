// Defino las clases
// producto
class Producto {
    #nombreProducto = "producto 1";        // puede haber muchos procuctos
    #precioProducto = 100;                 // valor numérico
    #vendidoA       = ["nombre de cliente"]; // a uno o mas clientes
    
    setNombreProducto (nombre) {
        this.#nombreProducto = nombre;   // se podría hacer una para poner en cero
    }

    getNombreProducto() {
        return this.#nombreProducto;
    }

    setPrecioProducto (precio) {
        this.#precioProducto = precio;   // se podría hacer una para poner en cero
    }

    getPrecioProducto() {
        return this.#precioProducto;
    }

    setVendidoA (nombre) {
        this.#vendidoA.push(nombre) ;   // spueden ser varios
    }

    getVendidoA() {
        return this.#vendidoA;          // devuelve un array
    }

}
// cliente
class Cliente {
    #nombreCliente = "un nombre";
    #montoComprado = 0;           // acumulado por cliente  


    setNombreCliente (nombre) {
        this.#nombreCliente = nombre;
    }

    getNombreCliente() {
        return this.#nombreCliente;
    }

    setMontoComprado (monto) {
        this.#montoComprado += monto;   // se podría hacer una para poner en cero
    }

    getMontoComprado() {
        return this.#montoComprado;
    }
}
/// defino los objetos 
// productos
const producto1 = new Producto();
const producto2 = new Producto();
// clientes
const cliente1  = new Cliente();
const cliente2  = new Cliente();
////
// Asigno valores a los atributos de cada uno
// Productos
producto1.setNombreProducto("YerbaMatex1Kg");
producto1.setPrecioProducto(1800);
producto2.setNombreProducto("Azucarx1Kg");
producto2.setPrecioProducto(900);
// clientes
cliente1.setNombreCliente("Juan");
cliente1.setMontoComprado(0);
cliente2.setNombreCliente("Pedro");
cliente2.setMontoComprado(0);
///
/// Imprime los objetos y sus valores...
//
console.log("Producto 1:");
console.log("Nombre:", producto1.getNombreProducto());
console.log("Precio:", producto1.getPrecioProducto());
console.log("Vendido a:", producto1.getVendidoA());

console.log("Producto 2:");
console.log("Nombre:", producto2.getNombreProducto());
console.log("Precio:", producto2.getPrecioProducto());
console.log("Vendido a:", producto2.getVendidoA());

console.log("Cliente 1:");
console.log("Nombre:", cliente1.getNombreCliente());
console.log("Monto Comprado:", cliente1.getMontoComprado());

console.log("Cliente 2:");
console.log("Nombre:", cliente2.getNombreCliente());
console.log("Monto Comprado:", cliente2.getMontoComprado());

/* Fin */





 