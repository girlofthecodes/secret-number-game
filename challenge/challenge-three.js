//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = []; 
console.log(listaGenerica);

/*Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
console.log(lenguajesDeProgramacion);

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function lenguajesDisponibles(){
    for (let i=0; i<lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}

lenguajesDisponibles();

/*Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.*/

function lenguajesReverso(){
    lenguajesDeProgramacion.reverse();
    lenguajesDeProgramacion.forEach(function(lenguaje){
        console.log(lenguaje);
    });
}

lenguajesReverso(); 

//Crea una función que calcule el promedio de los elementos en una lista de números.
function numeroPromedio(){
    let numeros = [9, 18, 27,36, 45, 54, 63, 72, 81, 90]   
    let suma = 0; 
    for (i=0; i<numeros.length; i++){
        suma = suma + numeros[i];
    }
    let promedio = suma / numeros.length;
    console.log(`Promedio: ${promedio}`);
}

numeroPromedio();

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function calculaMinMax(){
    let numeroMinMax = [98, 23, 45, 67, 2, 48, 1, 34, 14, 62, 83, 101, 28];
    console.log(`Numero maximo: ${(Math.max(...numeroMinMax))}`);
    console.log(`Numero minimo: ${(Math.min(...numeroMinMax))}`);
}

calculaMinMax(); 

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(){
    let numeroSuma = [1, 4, 6, 23, 46, 9, 25, 67, 45, 89, 14];
    let suma = 0; 
    numeroSuma.forEach(function(numero){
        suma += numero; 
    })
    console.log(`Suma total: ${suma}`);
}
sumaLista(); 

/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
o -1 si no existe en la lista.*/
function buscandoIndice(elemento){
    let numeroLista = [34, 56, 78, 98, 12, 35, 48, 67, 89, 9, 19];
    let numeroExiste = numeroLista.indexOf(elemento);
    if(numeroExiste === -1){
        console.log(numeroExiste); 
    } else {
        console.log(`El indice en la lista del elemento: ${elemento} es ${numeroExiste}`)
    }
}
buscandoIndice(9); 

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los 
elementos uno a uno.*/
function sumaIndex(lista1, lista2){
    if (lista1.length === lista2.length){
        let sumaListas = []; 
        let sumaTotal = 0; 
        for (let i=0; i<=lista1.length-1; i++){
            sumaTotal = lista1[i] + lista2[i];
            sumaListas.push(sumaTotal); 
        }
        
        console.log(`La nueva lista que se genero es ${sumaListas}`);
    } 
}
sumaIndex([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); 

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista){
    let listaCuadrado = []; 
    let numeroCuadrado = 0; 
    for (let i=0; i<=lista.length-1; i++){
        numeroCuadrado = Math.pow(lista[i], 2); 
        listaCuadrado.push(numeroCuadrado); 
    }
    console.log(`El cuadrado de cada elemento de la lista ${lista} es ${listaCuadrado}`);
}
cuadradoLista([2, 4, 6, 8, 10]); 