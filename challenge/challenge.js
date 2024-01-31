//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log("¡Hola, mundo!"); 
}


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoNombre(nombre){
    console.log(`¡Hola, ${nombre}!`); 
}

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble(numero){
    let numeroDoble = numero * 2; 
    console.log(numeroDoble);

}

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3){
    let promedioTotal = (num1+num2+num3)/3; 
    console.log(promedioTotal);

}

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function esMayor(numero1, numero2){
    let numeronEsMayor = numero1 > numero2 ? numero1 : numero2; 
    console.log(numeronEsMayor); 
}

/*Crear una función que reciba un número como parámetro y devuelva el resultado 
de multiplicar ese número por sí mismo.*/
function multiplicar(numero){
    let multiplicacion = numero * numero; 
    console.log(multiplicacion); 
}


saludo(); 
saludoNombre("Esmeralda");
numeroDoble(9);
promedio(9, 18, 27); 
esMayor(1, 3); 
multiplicar(9); 