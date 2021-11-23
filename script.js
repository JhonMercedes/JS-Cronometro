/*
window.onload = function() {}

o script só é carregado quando toda pagina for carregada

*/

window.onload = function() {
    //declarar variavel que vai amazenar os segundos
    var seconds = 00;

    //declarar variavel que vai armazenar as dezenas
    var tens = 00;

    //criar var para setar segundos e dezenas de acordo com as alterações 
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");

    //criar var para buttons 
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    //var para armazenar o intervalo 
    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
    
    /* Método setInterval => chama uma função ou avalia uma expressão em intervalos especificos (milisegundos)
        ela será chamada até que a função clearInterval seja chamada ou a janela seja fechada wwww.w3scholls.com
    */
        interval = setInterval(startTimer, 10);

    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";

        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

    // inicializar função
    function startTimer() {
        tens++;

        //quando tens for menos ou igual a 9 ele vai receber um '0' antes, logo adicionamos + tens : 01 02 03 04 ...
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" +0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }

}