let numeroSecreto;//o numero secreto
let cont;//contador de intentos
let gramatica;
let listaNumSorteados=[];
let contBucle=0;
comecarJogo();

function comecarJogo(){
    limparTexto();
    document.getElementById("reiniciar").setAttribute("disabled","true");
    mudarHTML("h1","Juego del Número Secreto")
    mudarHTML("p","Elija un numero de 1 a 10")
    numeroSecreto=generarNumeroSecreto();//o numero secreto

    cont=0;//contador de intentos
    gramatica="intento";
    if(listaNumSorteados.length==10){
        listaNumSorteados=[];
    }
}

function generarNumeroSecreto() {
    //gerador do numero
    let numeroGerado=Math.floor(Math.random()*10)+1;
    while(listaNumSorteados.includes(numeroGerado)){
        numeroGerado=Math.floor(Math.random()*10)+1;
        contBucle++;
    }
    listaNumSorteados.push(numeroGerado);
    contBucle=0;
    return numeroGerado;
    
}

function verificarIntento(){
    //testa o numero e soma a quantidade de tentativas
    cont++;
    let numero=parseInt(document.getElementById("valorUsuario").value);
    if(numeroSecreto==numero){
        mudarHTML("p",`Acertaste el numero en ${cont} ${gramatica}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        limparTexto();
        if(numeroSecreto>numero){
            mudarHTML("p","El numero es mayor");
        }else{
            mudarHTML("p","El numero es menor");
        }
    }
    gramatica="intentos";
}

function limparTexto(){
    document.getElementById("valorUsuario").value="";
}

function mudarHTML(elemento,texto){
    //so pra muddar o html
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}