/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en 
metros y peso en kilogramos, que se recibirán como parámetros.*/
function imc(altura, peso){
    let IMC = peso / Math.pow(altura, 2); 
    console.log('Tu masa corporal es de: '+ IMC.toFixed(2));
    return; 
}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero){
    let total = 1; 
    for (let i=1; i <= numero; i++){
        total = total * i; 
        
    }
    console.log(total);  
    return; 
}


/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente 
en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, 
considera la cotización del dólar igual a R$4,80.Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el 
valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.*/
function convertir_dolar(dolares){
    let pesos_mexicanos = 17.20; 
    let convertidor = pesos_mexicanos * dolares;
    console.log(`USD ${dolares} son $${convertidor} MXN`); 
    return; 
}

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/
function calculandoFigura(altura, anchura){
    let perimetro = 2*(anchura+altura); 
    let area = altura * anchura
    console.log(`Area: ${area} Perimetro: ${perimetro} de un rectangulo con altura de ${altura} y base de ${anchura}`);
    return; 
}


/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando 
su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function figuraCircular(radio){
    const pi = 3.14; 
    let area = pi * Math.pow(radio, 2)
    let perimetro = 2 * pi * radio 
    console.log(`Area: ${area} Perimetro: ${perimetro} de un circulo con un radio de ${radio}`);
}


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function multiplicaciones(numero){
    for (let i=1; i <= 10; i++){
        console.log(`${numero} X ${i} = ${(i*numero)}`); 
    }
}


imc(1.65, 68); 
factorial(9);
convertir_dolar(100);
calculandoFigura(5, 7); 
figuraCircular(3);
multiplicaciones(9); 