/*
funciones de orden superior, concepto de prograamcion funcional. 
Son funciones que cumplen 2 condiciones:

1- la primera condicion que pueden llegar a cumplir es una funcion reciba a otra como argumento.

2- devuelven una funcion como resultado.


¿? 

nos va a permitir modularizar y reutilizar nuestro codigo. 
va a a facilitarnos la creacion de operaciones complejas, iteracion, filtrar, mapear o reducir datos. 

El codigo es mas declarativo, => mas expresiones en vista al que. 


*/

// function ejecutarFuncion(funcion){
//     funcion()
// };

// function saludar(){
//     console.log("hola chicos")
// }

// ejecutarFuncion(saludar)



// /*
// forEach => nos sirve para recorrer elmentos del array y ejecutar una funcion por cada uno de ellos. 


// array.forEach(elemento, indice, array){

//     //se ejecuta el codigo por cada elemento

// }


// */

// const lista = document.getElementById("listaNombres")


// const nombres = ["pepe", "alejandro", "ramiro", "angel"]

// nombres.forEach(nombre =>{
//     const li = document.createElement("li");
//     li.textContent = nombre;
//    lista.appendChild(li)
// })

// /*clasificar numero pares o impares

// programa que utilice el método forEach para clasificar los números en dos grupos: números pares y números impares.
// El programa debe recorrer el array y:
// Almacenar los números pares en un array llamado pares.
// Almacenar los números impares en un array llamado impares.



// */

// // const numeros = [4,6,12,53,11,30,7,33,45];

// // const pares = [];
// // const impares = [];

// // numeros.forEach(numero =>{
// //     if(numero % 2 === 0){
// //         pares.push(numero)
// //     }else{
// //         impares.push(numero)
// //     }
// // })

// // console.log(pares)
// // console.log(impares)

// /*
// Tienes un array de objetos que representan estudiantes, 
// donde cada objeto contiene el nombre de un estudiante y su calificación en una materia.
//  Usa el método forEach para clasificar a los estudiantes en dos grupos:
// Los que aprobaron (calificación mayor o igual a 6) en un array llamado aprobados.
// Los que reprobaron (calificación menor a 6) en un array llamado reprobados.


// */


// const estudiantes= [

//     {
//         nombre:"luis",
//         nota: 8
//     },
//     {
//         nombre:"jesus",
//         nota: 4
//     },
//     {
//         nombre:"antonella",
//         nota: 2
//     },
//     {
//         nombre:"ruperto",
//         nota: 7
//     },
//     {
//         nombre:"pepe",
//         nota: 10
//     },

// ]

// const aprobados =[]
// const desaprobados =[];

// estudiantes.forEach(estudiante =>{
//     if(estudiante.nota >=6){
//         aprobados.push(estudiante)
//     }else{
//         desaprobados.push(estudiante)
//     }
// })

// console.log(aprobados)
// console.log(desaprobados)

// /*
// filter =>
//     trae a todos los elementos que coincidan con un criterio de busqueda. (condicion)
//     Filter automaticamente me crea un array nuevo, con los datos del array viejo
//     este array no modifica al original.
//     es que filtra datos de un conjunto


//     const nuevoArray = array.filter(function(elemento){
//         condicion que debe cumplir el elemnto.
    
//         return condicion
//     })



// */

// // const numeros = [4,6,12,53,11,30,7,33,45];

// // const numerosPares = numeros.filter(numero => numero % 2 === 0);

// // const mayoresA7 = numerosPares.filter(numero => numero > 7);

// const resultado = numeros
//     .filter(numero => numero % 2 === 0 &&  numero > 7)
//     // .filter(numero => numero > 7)

//     console.log(resultado)

// // console.log(numerosPares)

// // console.log(mayoresA7)


// /*
//     filtrado de usuarios y admins
// */

// const usuarios = [

//     {
//         nombre:"cami",
//         activo:true,
//         rol: "admin"
//     },
//     {
//         nombre:"seba",
//         activo:false,
//         rol: "admin"
//     },
//     {
//         nombre:"angel",
//         activo:true,
//         rol: "usuario"
//     },
//     {
//         nombre:"angela",
//         activo:false,
//         rol: "usuario"
//     },
//     {
//         nombre:"braian",
//         activo:true,
//         rol: "admin"
//     },

// ]

// const USUARIOS_ACTIVOS = usuarios.filter(usuario => usuario.activo);

// const roles = USUARIOS_ACTIVOS.filter(usuario=> usuario.rol === "admin")

// console.log(USUARIOS_ACTIVOS)

// console.log(roles)

// /*
// filtrar productos disponibles

// los que esten stock 
// y los que valgan arriba de 300 y menos de 800
// */

// const productos = [
//     { nombre: "Laptop", precio: 1000, enStock: true },
//     { nombre: "Celular", precio: 500, enStock: true },
//     { nombre: "Teclado", precio: 50, enStock: true },
//     { nombre: "Mouse", precio: 25, enStock: false },
//     { nombre: "Monitor", precio: 200, enStock: true }
// ];

// let enStockRango = productos.filter(elementos => elementos.enStock === true && elementos.precio > 300 &&elementos.precio <800)

// console.log(enStockRango)

// /*
// map => crea un array con los resultados de aplicar una funcion sobre los elementos de un array, lo que se aplique no modifica la array original


// */

// // const precio = [100,200,300];

// // const precioAumentado = precio.map(precio => precio * 2);

// // console.log(precioAumentado)

// //cami quiere sacar una letra

// const palabras = ["cami", "maxi", "marce", "franco"];

// const camiQuiereSacarLetra = "a";

// const palabrasSinA = palabras.map( palabra => palabra.replace(camiQuiereSacarLetra,'' ))

// console.log(palabrasSinA)

// /*
// replace => cambia valores de string, donde primero se selecciona el string y luego se lo reemplaza

//     string.replace(valorBuscado, valorReemplazado)
// */

// /*
// cuando querramos cambiar los nombres de los usuarios y ponerlos todos en mayus sin afectar, los arrays viejos

// */

// const palabrasEnMayus = palabras.map(palabra => palabra.toUpperCase())
// console.log(palabrasEnMayus)


/*
reduce => trabaja como funcion acumuladora y reduce los elementos a 1;


variable nombreDevariable = array.reduce(callback, valor inicial del acumulador)

1 => el valor acumulado y lo va a ir iterando


*/

const numeros = [4,6,12,53,11,30,7,33,45];

const sumaTotal = numeros.reduce((acumulador, valorActual)=> acumulador + valorActual, 0);

console.log(sumaTotal)


const productos = [
         { nombre: "Laptop", precio: 1000, enStock: true },
         { nombre: "Celular", precio: 500, enStock: true },
         { nombre: "Teclado", precio: 50, enStock: true },
         { nombre: "Mouse", precio: 25, enStock: false },
         { nombre: "Monitor", precio: 200, enStock: true }
     ];


     const compraTotal = productos.reduce((acumulador,producto)=>{

        if(producto.enStock === true){
            acumulador += producto.precio
        }
return acumulador;


     },0)

     console.log(compraTotal)

     /*
     
     find => devuelve el primer elemento del array que cumpla con una condicion


     variable nombreV = array.find(instruccion)

     */

     const productoPrecio = productos.find (producto => producto.precio > 400);

     console.log(productoPrecio)


     /* some => siempre va a devolver un booleano y ve si esta o no en el array */


     let hayProducto = productos.some(producto => producto.nombre === "Laptop");
     console.log(hayProducto)