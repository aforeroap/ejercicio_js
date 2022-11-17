// Operaciones básicas, Tipos de datos, Prompt y Alert:

// Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

/*let numero = parseInt(prompt("Imgrese primer numero"))
let nuemro2 = parseInt(prompt("Ingrese segundo numero"))

suma = (numero + nuemro2)
alert("El resultado de la suma es: " + suma)
console.log(suma)*/

// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

/*let Celcius = parseInt(prompt("Ingrese temperatura en Celcuis: "))

suma = (Celcius * 9/5+32)

alert("El resltado en Fahrenheit es: " + suma)*/

// Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

/*let numero = parseInt(prompt("Ingrese un numero"))

numero = (numero / 10)
alert("El resultado de la division es: " + numero)*/

// Si a = [1,2,3] crear un script que muestre una alerta del tipo de dato de a.

/*let a = [1,2,3]

alert(typeof(a))*/


// If and else:

// rear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

/*let numero = parseInt(prompt("Ingrese numero: "))

if (numero  % 2 == 0){
    alert("El numero es par")
}

else{
    alert("El numero es impar")
}*/

// Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

/*let numero = parseInt(prompt("ingrese nuemro: "))

if (numero % 5 == 0){
    alert("El numero es divisible por 5")
    console.log ("resultado: " + numero / 5)
}

else{
    alert("El numero no es divisible por 5")
}*/

// Crear un programa que determine si un número introducido en un prompt es divisible por 11 y 5 o no, mostrar el resultado con console.log

/*let numero = parseInt(prompt("Ingrese numero: "))

if (numero % 11 == 0 && numero % 5 == 0){
    alert("El numero es divisible por 11 y 5")
    console.log ("El resultado dividido por 11 es: " + numero / 11)
    console.log ("El resultado dividido por 5 es: " + numero / 5)
}

else{
    alert ("El numero no es divisible ni por 5 ni por 11")
}*/

// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

/*let numero = parseInt(prompt("Ingrese primer numero: "))
let numero2 = parseInt(prompt("Ingrese segundo nuemro: "))

if (numero > numero2) {
    alert ("El numero mayor es: " + numero)
}

else {
    alert("El numero mayor es: " + numero2)
}*/

// Crear un programa que le pida al usuario primero un número al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

/*let numero = parseInt(prompt("Ingrese primero numero: "))
let numero2 = parseInt(prompt("Ingrese segundo numero: "))

numero > numero2 ? alert("El numero mayor es: " + numero) : alert("El numero mayor es: " + numero2)*/

// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

/*let nombre = prompt("Ingrese nombre: ")

if (isNaN(nombre.charAt(0))) {

    alert("Empieza por una letra")
}
else {
    alert("Empieza por un numero")
}*/

// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

/*let angulo_1 = parseInt(prompt("Ingrese angulo 1: "))
let angulo_2 = parseInt(prompt("Ingrese angulo 2: "))
let angulo_3 = parseInt(prompt("Ingrese angulo 3: "))

if (angulo_1 + angulo_2 + angulo_3 == 180) {
    alert("Los angulos del triangulo son validos")
}

else {
    alert("Los angulos del triangulo son inválidos")
}*/

// Determinar si una palabra empieza con mayúscula o no. 

/*let nombre = prompt("Ingrerse nombre")
let primera_letra = (nombre.charAt(0))

if (primera_letra === primera_letra.toUpperCase()) {
    alert("La primera letra contiene mayuscula")
}

else {
    alert("La primera letra contiene minuscula")
}*/








