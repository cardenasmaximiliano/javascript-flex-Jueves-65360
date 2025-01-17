//NullisCoalescing

/*
nos permite a nosotros manejar valores nulos o indefinidos, de forma segura y eficiente.


*/

// let nombreUsuario = null;
// let usuarioPorDefecto = "invitado";

// let nombre = nombreUsuario ?? usuarioPorDefecto;
// console.log(nombre);

/*

@mixins flex ($flex){

    display: $flex;
}


@include flex(grid)


funciones => son bloques de codigo reutilizables que realizan tareas especificas o calculan vlaores.


function nombreClave(suele ser la accion que realiza la funcion) (parametros){
    //ejecutar codigo

}

nombreClave()

/*
    reutilizacion de codigo
    modularizacion => dividimos el programa en partes pequeñas
    personalizable => podemos aceptar parametros que se ajusten a nuestro codigo.
    retorno de valores. 


*/

// let num1 = 2;
// let num2 = 3;

// let suma = num1 + num2;

// console.log(suma)

// function sumar(a,b){

//     return a + b

// };

// console.log(sumar(5,3))
// console.log(sumar(2,3))

// /*
// () => funcion
//  [] => array
//  {} => objetos, la ejecucion funcion



/*
    Escribe una función que imprima los números del 1 al 100. Usa un bucle for para hacerlo.

*/

// function imprimirNumeros(){

//     for(let i = 1; i <=100; i++){
//         console.log(i)
//     }

// }

// imprimirNumeros()

/*
Escribe una función que pida una palabra al usuario y cuente cuántas letras tiene, utilizando un bucle while.

*/

// function contarLetras(){

//     let palabra = prompt("introduci tu palabra")
//     let contador = 0;
//     let i = 0;

//     while( i < palabra.length){
//         contador++ //incrmentar el contador por letra
//         i++ //avanza al otro caracter
//     }

//     console.log("la palabra" + palabra + " tiene de letras : "+ contador)
// }

// contarLetras()

/*

 Escribe un programa que pida un número entero y determine si es par o impar utilizando una función.

function

hay una condicion

 */
// let numero = parseInt(prompt("pone tu numero campeon"));


// function parOImpar(numero){

//     if(numero % 2 === 0){
//         return "el numero es par"
//     } else{
//         return "es imparcito"
//     }

// }



// console.log(parOImpar(numero))

//scope
/*
como definicion nos hablo de algo llamado ambito, vendria a ser el alcance en este caso que tiene una variable.
variables de tipo global => que la variable se va a poder llamar en cualquier parte de nuestro codigo.
variables de tipo local  => se suele crear dentro de una funcion y muere dentro de la misma. No se puede llamar por fuera.



*/


// let variableGlobal = "esto es global";

// function mostrarVariable(){

//     let variableLocal = "esto es una variable local"
//     console.log(variableGlobal)
//     console.log(variableLocal)
// }

// mostrarVariable()

// console.log(variableLocal)

/*
funciones anonimas y funciones flecha

funcion anonima que es? es una funcion que no tiene un nombre explicito. Y comunmente se encuentran definidas dentro de variables, o son argumentos de otras funciones. 

*/

// const miFuncion = function(){
//     //cuerpo de la funcion

//     return "algo"
// }

// console.log(miFuncion)

// const sumar = function(a,b){
//     return a + b
// }

// console.log(sumar(4,5))

/*
las funciones se usan cuando: 
no tenemos un identificador explicito.
cuando necesitemos trabajar con callbacks... => metodos setTimeOut, map, filter.

*/

/*
funcion flecha o arrow function

nace en ecma6 => es una manera mas limpia sencilla y legible de crear funciones. 


*/

// const nombreFuncion = (parametros) => {
//     //cuerpo de la funcion
//     return resultado
// }

// 
// funcion tradicional
// function sumar(a,b){
//     return a+ b
// }


//las funciones flecha son mas sencilla de escribir por que nos ayuda a reducir lineas de codigo y nos ofrece un return implicito.
// const sumar = (a,b) => a + b;

// console.log(sumar(3,5))


//funcion para solicitar datos de un usuario

/*
nombre edad pais


*/

// function solicitarDatos(){

//     const NOMBRE = prompt("ingresa tu nombre:");
//     const EDAD = parseInt(prompt("ingresa la edad"))
//     const PAIS = prompt("ingresa tu pais")

//     return {NOMBRE,EDAD,PAIS}
// }

// const datosUsuario = solicitarDatos()

const SOLICITAR_DATOS = () =>{
    const NOMBRE = prompt("ingresa tu nombre:");
         const EDAD = parseInt(prompt("ingresa la edad"))
         const PAIS = prompt("ingresa tu pais")
    
        return{NOMBRE,EDAD,PAIS}
}

const DATOS_USUARIO = SOLICITAR_DATOS()
console.log(DATOS_USUARIO)

const PROCESAR_INFO = (datos)=>{
   let esMayorDeEdad;

   if(datos.EDAD >= 18){
    esMayorDeEdad = "es mayor de edad"
   }else{
    esMayorDeEdad = "es menor de edad"
   }

    let mensaje = `${datos.NOMBRE} DE ${datos.PAIS} tiene ${datos.EDAD}`
    return mensaje
}