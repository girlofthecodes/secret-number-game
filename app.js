let numeroSecreto = 0;  
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return; 
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value); 
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}!`); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        IntentarDesabilitado(); 
    } else {
        if (intentos < intentosMaximos){
            if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero secreto es menor'); 
            } else {
                asignarTextoElemento('p', 'El numero secreto es mayor'); 
            }
            intentos++;
            limpiarCaja(); 
        return; 
        } else {
            if (intentos === intentosMaximos && numeroSecreto != numeroUsuario) {
                asignarTextoElemento('p', 'Has excedido el número de intentos, inicia un nuevo juego!'); 
                document.getElementById('reiniciar').removeAttribute('disabled'); 
                IntentarDesabilitado(); 
            } 
        }
    }
    
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
    return; 
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById('intentos').removeAttribute('disabled'); 
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1; 
}


function IntentarDesabilitado(){
    document.querySelector('#intentos').setAttribute('disabled', 'true'); 
}


function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar menssaje de intervalo de numero
    //Generar el numero aleatorio 
    //Inicializar el numero de intentos
    condicionesIniciales(); 
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
     
}

condicionesIniciales(); 
