// Variaveis
var operacao1
var operacao2
var operacaoprincip

function init(){
    // funcoes com variáveis
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var adicao = document.getElementById("adicao");
    var igual = document.getElementById("igual");
    var multiplicacao = document.getElementById("multiplicacao");
    var divisao = document.getElementById("divisao");
    var subtracao = document.getElementById("subtracao");
    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var zero = document.getElementById("zero");
    
    //Eventos
    um.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dois.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    quatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    sete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    oito.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nove.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    zero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }
    reset.onclick = function(e){
        resetar(); 
    }
    adicao.onclick = function(e){
        operacao1 = resultado.textContent;
        operacaoprincip = "+";
        limpar();        
    }

    subtracao.onclick = function(e){
        operacao1 = resultado.textContent;
        operacaoprincip = "-";
        limpar();        
    }
    multiplicacao.onclick = function(e){
        operacao1 = resultado.textContent;
        operacaoprincip = "*";
        limpar();        
    }
    divisao.onclick = function(e){
        operacao1 = resultado.textContent;
        operacaoprincip = "/";
        limpar();        
    }
    igual.onclick = function(e){
        operacao2 = resultado.textContent;
        resolver();        
    }
}

function limpar(){
    resultado.textContent = "";
}
function resetar(){
    resultado.textContent = "";
    operacao1 = 0;
    operacao2 = 0;
    operacaoprincip = "";
}

function resolver(){
    var res = 0;
    switch(operacaoprincip){
        case"+":
        res = parseFloat(operacao1) + parseFloat(operacao2);
        break;

        case"-":
        res = parseFloat(operacao1) - parseFloat(operacao2);
        break;

        case"*":
        res = parseFloat(operacao1) * parseFloat(operacao2);
        break;

        case"/":
        res = parseFloat(operacao1) / parseFloat(operacao2);
        break;
    }
    resetar();
    resultado.textContent = res; 
}