let numeroSecreto;
let intentos = 0;
let listaNumeroSorteados=[];
let numeroMaximo=10; 


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {/// el triple igual es para que sea igual en valor y el tipo
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos==1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");//Habilitamos el boton de NUevo Juego
    } else{
        //Aca el usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","numero secreto es menor");
        }else{
            asignarTextoElemento("p","numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();//limpia la caja donde ponemos el numero
    }
    return;
}

function limpiarCaja(){
    //Se utiliza # para usar el id de este tag
    let valorCaja= document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado =Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length== numeroMaximo){
        alert("Ya se sortearon todos los numeros posibles");
    }else{ 
        //Si el numero generado está incluido en la lista     
        if(listaNumeroSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto(); 
         }else{
              listaNumeroSorteados.push(numeroGenerado);
             return numeroGenerado; 
            }
        }   

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    /*1.Limpiar caja
    2.Indicar mensaje de intervalo de numeros
    3.Generar el numero aleatorio
    4.Deshabilitar el boton de nuevo juego
    5.Inicializar el numero de intentos*/
    limpiarCaja();
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled',true);//deshabilitamos el boton de nuevo juego
   
       
}


condicionesIniciales(); 

