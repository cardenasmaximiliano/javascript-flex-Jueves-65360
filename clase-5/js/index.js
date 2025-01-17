let persona = [{

    nombre: "maximiliano",
    apellido: "cardenas",
    edad: 32,
    ciudad: "mar del plata"
},
{
    nombre: "emanuel",
    apellido: "pardo"
}
] 
/*
funcion construcora: 
nos sirve para crear objetos reitaradas veces con un solo bloque de codigo
esta compuesto 

por this => que va a hacer referencia al objeto que se esta creando 
y 

new => operador que invoca a la funcion constructora y es la que pasa los argumentos para que se cree un nuevo objeto.

*/


// function Persona(nombre, apellido,edad,ciudad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.ciudad = ciudad;

//     this.saludar = function(){
//         console.log(`Hola soy ${this.nombre} mi apellido es ${this.apellido}, tengo ${this.edad} y vivo en ${this.ciudad}`)
//     }
// }

// const PERSONA_UNO = new Persona("emanuel", "Pardo" , 35, "buenos aires");
// const PERONA_DOS = new Persona("ignacio", "lencina",24, "neuquen")
// PERSONA_UNO.saludar()
// PERONA_DOS.saludar()


/*
localStorage => es una api de navegador que nos va a dejar almacenar datos clave valor de una manera que persista. 

persistencia => los se mantienen hasta que los eliminamos nosotros mismos.
es limitada => los dominios poseen mas o menos 5mb para almacenar informacion.
SOLA MENTE ALOJA DATOS EN FORMATO TEXTO. 

DIFERENCIA FUNDAMENTAL ENTRE SESIONSTORAGE Y LOCALSTORAGE => sesion storage si cierro la pestaña o el navegador. Se pierde 
la info guardada, 

local storage => es sistemico y cuenta con una estructura que se respeta.

setitem (llave, valor) => guarda un elemento.
getItem => recupera el valor de la llave creada;
*/
// function Producto(id, nombre,precio){

//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio
// }
// //manejamos el carrito a teves de una funcion

// function Carrito(){

//     //obter productos del localstorage, 
//     this.productos = JSON.parse(localStorage.getItem("carrito")) || [];


//     this.agregarProducto = function(producto){
//         this.productos.push(producto);
//         this.guardarEnStorage();
//         console.log(`${producto.nombre} añadido al carrito `)
//     }

//     this.mostrarCarrito = function(){
//         if(this.productos.length === 0){
//             console.log("el carrito esta vacio ")
//         }else{
//             console.log(this.productos)
//         }
//     }
//     this.guardarEnStorage = function(){
//         localStorage.setItem("carrito", JSON.stringify(this.productos));
//     }
// }

// const micarrito = new Carrito();

// const producto1 = new Producto (1, "arroz", 5500);
// const producto2 = new Producto(2, "azucar",3400)

// micarrito.agregarProducto(producto1, producto2)

// micarrito.mostrarCarrito()

// localStorage.setItem('usuario', 'sebastias gallego')

// let usuario = localStorage.getItem('usuario')
// console.log(usuario)

/*
clase constructora, es un modelo para crear objetos con propiedades y metoso especificos.

esta compuesto por:

clase  => define estructura y comportamiento del objeto.
constructor => metodo especial que va a inicilizar las propiedades del objeto. 
Metodos => definen el comportamiento de los objetos creados con la clase.


class Persona{

    constructor(nombre, edad){
    this.nombre = nombre
    this.edad  = edad
    }

    saludar(){
    console.log ()
    
    }
}




*/
class Producto {

    static contadorId =1; //propiedad que va a generar los id automaticamente

    constructor(nombre,precio,cantidad){
        this.id = Producto.contadorId++;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);

        this.subtotal = 0
    }

    calcularSubtotal(){
        this.subtotal = this.precio * this.cantidad;
    }
}

const productos = [];

function agregarProducto(){
    const nombre = prompt("ngresa el nombre del producto");
    const precio = prompt ("ingresa el precio")
    const cantidad = prompt("ingresa la cantidad");

    const nuevoProducto = new Producto (nombre,precio,cantidad);

    nuevoProducto.calcularSubtotal()

    |productos.push(nuevoProducto);

    console.log("producto agregado", nuevoProducto)

    console.log("array productos:", productos)
}

agregarProducto()