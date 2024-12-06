//un comentario en una sola linea
/**
//     esto es un comentario
//     en multilinea
//  */

// //variable: es un espacio reservado de  memoria que almacena un tipo de dato.
// /*
// tipos de datos: 

// booleanos = true o false;
// numeros, enteros(int) o flotante(float)
// Strings= "es una cadena de texto" 'esto es con comillas simples' `esto son backtincs`

// funciones
// objetos
// arrays

// Ecma6 nace en el 2015

// var => se sigue viendo en codigos bastante viejitos. 

// let y const => son las que se utilizan al dia de la fecha

// let => declara una variable cuyo valor puede cambiar a lo largo del programa. (esta puede variar en cuanto al valor)
// const => declara una variable que se va a manter constante a lo largo de mi programa  (esta no puede variar en cuanto al valor)

// estructura de una variable rapiditoo

// let nombre = dato alojado;

// SI ESCRIBO UNA VARIABLE CON LET EL NOMBRE SE SUELE PONER EN CAMELCASE

// let profesor Coderhouse = "maximiliano";
// const PROFESOR_CODERHOUSE = "MAXIMILIANO";

// declarar => nombre de variable
// inicializar => ponerle el valor a la variable

// */

// let profesorCoderhouse; //declare

// profesorCoderhouse = "maximiliano";

// // alert(profesorCoderhouse);

// //existen metodos que nos permiten visualizar acciones de nuestro codigo en el navegador.
// /*
// console.log
// */
// /*
// alert => genera alertas 
// */

// // let ingresoDeDatoPorElUsuario = prompt("ingresa tu nombre");

// // console.log(ingresoDeDatoPorElUsuario);

// /*
// Realizá un programa que permita ingresar 3 notas pertenecientes  
// para cierto alumno de nivel secundario. Debe calcularse y mostrarse la nota promedio

// operadores aritmeticos

// +
// -
// *
// /
// %
// */

// let alumnoUno = 7;
// let alumnoDos = 4;
// let alumnoTres = 9;

// let sumatoriaDeNotas = alumnoUno + alumnoDos + alumnoTres;

// console.log("la suma de las notas es: " + sumatoriaDeNotas); 
// //esto se llama concatenar la concatenacion existe entre strings, 

// let promedio = sumatoriaDeNotas/3;

// console.log("el promedio de los chicos es :"+ promedio)

// /*
// Realizá un programa que permita ingresar un número entero. 

// Debe mostrarse el número ingresado
//  a. Multiplicado por 5. 
//  b. Despues al resultado Dividirlo por 2

// */

// /*
// NaN => not a number

// */


// let numeroEntero = parseInt(prompt("ingresa un numero entero")) ;
// console.log("el tipo de dato que aloja numero entero es: " + typeof numeroEntero);
// /*
// 3 maneras de convertir un prompt a numero
// 1 => funcion Number, convierte el valor ingresado al prompt en un dato de tipo numerico
// 2 => parseInt() => nos va a convertir el string en un numero siempre y cuando se a entero. 
// 3 => parseFloat() => nos convierte un numero flotante, o con coma. (se usa cuando se aplica un numero decimal)

// */

// //todos los datos alojados en un prompt por defecto siempre van a ser string.


// // let multiplicar = numeroEntero * 5;
// // console.log(multiplicar);

// // let dividido = multiplicar/2; //segun el enunciado original esto se puede entender como dividirlo por numeroEntero o Multiplicar
// // console.log(dividido);

// /*
//      Realizá un programa que permita ingresar el valor monetario de una 
//     hora de trabajo y la cantidad de horas trabajadas por día por un trabajador. 
//     Debes mostrar el valor del salario semanal, sabiendo que trabaja todos 
//     los días hábiles y la mitad de las horas del día hábil los sábados.

// */

// let horaTrabajo = parseInt( prompt("ingresa el valor de una hora de trabajo:"));
// let cantidadHorasPorDia = parseInt( prompt("ingresa la cantidad de hora trabajadas:"));

// let salarioDia = horaTrabajo * cantidadHorasPorDia;

// let salarioDiasHabiles = salarioDia * 5;

// let salarioSabados = salarioDia / 2;

// let salarioTotal = salarioDiasHabiles + salarioSabados;

// console.log("el salario del trabajador es: " + salarioTotal);

/**
 
Realizá un programa 
 que permita ingresar valores del mismo tipo para las variables num1 y num2. 
 Una vez cargadas, mostrar ambas variables por pantalla, intercambiá sus valores 
 (que lo cargado en num1 quede en num2, y viceversa) y volvé a mostrarlas 
 actualizadas.

 */

let numeroUno = 4;
let numeroDos = 6;

console.log(numeroUno);
console.log(numeroDos);

let variableAux = numeroUno;

numeroUno = numeroDos; 
numeroDos = variableAux;

console.log("numeroUnoActualizado " + numeroUno)
console.log("numeroUnoActualizado " + numeroDos)
