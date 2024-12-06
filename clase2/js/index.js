//condicionales y operadores

// if => se ejecuta si es verdero

//else => se va a ejecutar cuando algo sea falso

//else if => si la primera condicion no se cumple, aparece else if como segunda condiciones
//else if se repite tantas veces como sea necesario. 

//evaluar varias condiciones

//evaluar notas


/*

if(condicion){
    //todo lo que queres que se ejecute
}

*/
/*
operadores comparacion

== 2 valores iguales
=== que el valor y el tipo de dato tienen que ser iguales 
!= algo no es igual y solamente compara valores
!==  algo no es igual y compara valor y tipo de dato

<, <=  (menor que, menor o igual que)
>, >= (mayor que, mayor o igual que)

operadores logicos

&& => AND, Y  => es que si o si los 2 elementos comparados tienen que devolver true
|| => OR, O
!  => NOT 


*/

/*
    A       B       A&&B
    true    true    true
    true    fals    false
    fals    true    false
    fals    false   false

    A       B       A||B
    true    true    true
    true    false   true
    false   true    true
    false   false   false

   ! invierte el resultado
   true  => false
   false => true
*/


// let nota = parseInt(prompt("ingresa la nota del alumno"));
// //90% => un excelente
// //70 => bien
// //60 => estudia mas



// if (nota >= 90 ){
//     console.log("te sacaste un excelente")
// } 
// else if (nota >= 70){
//     console.log("te sacaste un bien")

// }else{
//     console.log("necesito que estudies mas.")
// }

/*

Escribe un programa que permita ingresar la edad de una persona y m
uestre un mensaje según su rango de edad:

Si tiene 0 a 12 años, mostrar "Eres un niño".
Si tiene 13 a 17 años, mostrar "Eres un adolescente".
Si tiene 18 a 64 años, mostrar "Eres un adulto".
Si tiene 65 años o más, mostrar "Eres un adulto mayor".


*/

//let utilizamos camelCase
// const EDAD_PERSONA = parseInt (prompt("ingresa tu edad:")); //snake case  en mayuscula y las une con _

// if(EDAD_PERSONA >= 0 && EDAD_PERSONA <= 12){
//     console.log("es un niño")
// }
// else if (EDAD_PERSONA >= 13 && EDAD_PERSONA <=17){
//     console.log("es adolescente")
// }
// else if (EDAD_PERSONA >= 18 && EDAD_PERSONA <=64){
//     console.log("es adulto")
// }
// else {
//     console.log("es adulto mayor")
// }

// ciclos y control de flujos
/*
es un loop que se repite, el algo que se repite. 

tenemos 2 tipos 

1° => es el que se ejecuta sabiendo cuantas veces queremos que se repita. 
ciclo por conteo seo conoce como FOR

2° => es el cual se ejecuta hasta que se cumpla una condicion determinada.
ciclo while o do...while

*/

/*
ciclo for => 

    for (inicio; condicion; 
    
    incremento
    i++  es igual i + 1
    
    o decremeto){
    //codigo a ejecutar

    i--
    }

*/

//se contara del 1 al 5
// for(let i = 0;i <=5; i++){
    
//     if( i === 3){
//         break
//     }
//     console.log(i)
// }   

//continue
//

// const numeros = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i < numeros.length; i++){

//     if( numeros[i] % 2 === 0 ){
//         continue;
//     }
//     console.log(i);
// }

/*

while 
do while 

while(condicion){
    //ejecucion del programa
}

*/


// let variableWhile = 1;

// while(variableWhile <= 5){
//     console.log(variableWhile)
     
//     variableWhile++;
// }

//le pedimos al usuario que ingrese un numero mayor a 0

// let numeroCaso = -1;

// while(numeroCaso <= 0){
//     numeroCaso = parseInt(prompt("ingresa un numero mayor a 0:"))

//     if(numeroCaso <=0){
//         console.log("numero invalido intente de nuevo")
//     }
// }

// console.log("numero valido" + numeroCaso)

//

// let numeroSecreto = 7;

// let adivinado = false;

// while(!adivinado){
//     const intento = parseInt(prompt("adivina el numero del 1 al 10"));
//     if( intento === numeroSecreto){
//         console.log("felicitaciones adivinaste")
      
//     }
//     else{
//         console.log("intenta de nuevo ")
//     }
// }

// do{
//     //bloque que se desea ejecutar de codigo
// }while(condicion)

let contador = 0;

do{
    console.log(contador);
    contador ++
}while(contador <= 5)