//acceder a una elemente html  en javaScript 
//Asignando una variable y con la funcion: document.querySelector('');

let numeroSecreto=0;
let intentos = 0;
//declaracion de un arrays
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numSecreto)
//declaración de una funcion
function verificarIntento(){
    //otra funcion del document para traernos elementos de html mediante su ID
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //cuando el usuario no acertó
        if (numeroDeUsuario> numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    
    } 

    return;
}

function limpiarCaja(){
    //al igual que en el document.getElementById tambien con el querySelector si ponemos el "#" podemos poner el ID del elemento
    // let valorCaja =document.querySelector('#valorUsuario')
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

// let titulo = document.querySelector('h1');
// titulo.innerHTML ='Juego del número secreto';
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1-10';
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}



function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número de 1-${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    //asignamos una variable para un random 
    // let numeroSecreto= Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //recursividad 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    } 
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros 
    //Inicializar el número intentos
    //generar el numero aleatorio
    condicionesIniciales();
    //deshabilitar el botón de nuevo juegod
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();