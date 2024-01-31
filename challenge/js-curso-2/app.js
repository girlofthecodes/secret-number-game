//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let title = document.querySelector('h1'); 
title.innerHTML = "Hora del Desafío"; 

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function botonConsole(){
    console.log("El botón fue clicado");
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti". */
function botonPrompt(){
    let city = prompt("Introduce una ciudad de Brasil: ");
    alert(`Estuve en ${city} y me acordé de ti`);
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function botonAlert(){
    alert("Yo amo JS"); 
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function botonSuma(){
    let numberone = parseInt(prompt("Ingresa el primer numero: "));
    let numbertwo = parseInt(prompt("Ingresa el segundo numero: ")); 
    let suma = numbertwo + numberone

    alert(`${numberone}+${numbertwo}=${suma}`);
}