/*
arrays =>  arreglos 

    un tipo de dato nos va a permitir almacenar una coleccion de 
    elementos en un solo lugar.

    []
    numeros, strings, booleanos, objetos, funciones, arrays.

    let array = [1 , 2 , 3 ,4]
    const

*/

let array = [1 , 2 , 3 ,4, 10 ,11];

console.log(array)
console.log(array[2])


/*
los metodos en array nos sirven basicamente para manipular nuestros arreglos
Podemos ejecutar acciones especificas. 

*/

/**
 push => nos permite aplicar 1 o mas elementos a nuestro array siempre al final

 */


array.push(10,12)

console.log(array)

//pop => elimina el ultimo elemento del array


array.pop()

console.log(array)

//unshift => nos permite es agregar delante de nuestro array datos

array.unshift("esto se va a unir a mi array")
console.log(array)

 array.shift(2);
console.log(array)

//splice

// array.splice(1,1, "esto es un splice")

// console.log(array)

//slice nos permite generar una copia de nuestro array.


let arrayDos = array.slice(1,3)

console.log(arrayDos)

//concat => nos permite agarrar y uni 2 o mas arrays

let nombres = ["Juan", "pedro", "Felipe", "cacho"]

let nombreDos = ["micaela", "daniela", "araceli"];

let curso = nombres.concat(nombreDos)

console.log(curso)

// join => que nos convierte un array en una cadena de caracteres.

// let stringNombre = nombres.join("-")
// console.log(stringNombre)

// nombres.sort()
 /*
Todo lo que sea string en sistema unicode lo va a ordenar
mostrando todo lo que este en mayus y luego todo lo que sea minuscula.


*/


// console.log(nombres)


// array.sort((a,b) => b - a)
// console.log(array)


/** indexOf => encuentra la posicion del primer elemento que coincida con una busqueda
 * y me va a devolver su indicie
 */

console.log(nombres.indexOf("juan"))

//include tantea en nuestro array si existe el elemento y nos devuelve verdadero o falso

console.log(nombres.includes("juan"));


///agreguemos numero en un arrays vacio.

// let numeros = [];

// function agregarDatos(numero){

//     numeros.push(numero)

// }

// agregarDatos(2)
// agregarDatos(10)
// console.log(numeros);


//mostrar el primer y el ultimo elemento de un array
// debe ser mostrado a traves de una funcion

let numeros = [0, 1, 2, 3, 4, 5];

function verificacion () {
    console.log (numeros[0]);
    console.log (numeros[numeros.length - 1]);
}
verificacion ();

/**
    Objetos, es una estructura que nos permite almacenar datos y
    funcionalidades relacionadas a un elemento. 


    persona = nombre, apellido,edad, numero telefonico una direccion.

    clave - valor;

    el valor => puede ser cualquier tipo de dato.
    number, string, boolean. array, otro objeto funcion


 */




let maxi = {
    nombre: "maximiliano",
    apellido: "cardenas",
    edad: 32,
    ciudad: "mar del plata",
    direccion:{
        calle: "luro",
        numero: 1234
    }
}

console.log(maxi.nombre)
console.log(maxi.edad)

maxi.dni = 37056111

delete maxi.dni
console.log(maxi)

maxi.ciudad = "san clara";

console.log(maxi.ciudad)

//filter => crea un nuevo array con los elementos que cumplan con una condicion

/*
los productos a nivel general suelen estar 
guardados en un array.
ese array suele contener objetos.

*/

let productos = [

    {
        id: 1,
        nombre: "mouse",
        marca: "logitech",
        precio: 30000
    },
    {
        id: 2,
        nombre: "teclado",
        marca: "logitech",
        precio: 60000
    },
    {
        id: 3,
        nombre: "mouse",
        marca: "hyperX",
        precio: 35000
    },
    {
        id: 4,
        nombre: "teclado",
        marca: "hyperX",
        precio: 50000
    },

]

let productosBaratos = productos.filter(producto => producto.precio <50000)

console.log(productosBaratos)

// metodo map => lo que nos permite a nosotros es generar 
// un nuevo array en base a otro.




//creamos un nuevo array con un descuento del 20%

let descuento = 0.9;

let productosConDescuento = productos.map(producto =>{
    return{
        id: producto.id,
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        precioDescuento: (producto.precio * descuento).toFixed(2)
    }

})

console.log("productos con descuento", productosConDescuento)


//


let hasta10 = [1,2,3,4,5,6,7,8,9,10];

hasta10.forEach(numero =>{
    console.log(numero*2)
})


let numeroPorDos = hasta10.map(numero => numero*2);

console.log(numeroPorDos)