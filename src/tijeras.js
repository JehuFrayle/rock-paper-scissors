let usuario;
let maquina;

const rock = "piedra";
const paper = "papel";
const scissors = "tijeras";

const scoreBoard = document.getElementById("score");

function makeCounter(){
    let counter = 0;

    return {
        increase: function(){
            counter ++;
            return counter;
        },
        decrease: function(){
            counter = counter -1;
            return counter;
        },
        getValue: function(){
            return counter;
        },
        toZero: function(){
            counter = 0;
            return counter;
        }
    }
}

const cpuScore = makeCounter();
const usrScore = makeCounter();


function quienGana(usr, cpu) {
    if (usr == "piedra") {
        if (cpu == "piedra") {
            alert('Empate!');
        }
        else if (cpu == "papel") {
            alert('Perdiste!');
            cpuScore.increase();
        }
        else if (cpu == "tijeras") {
            alert('Ganaste!');
            usrScore.increase();
        }
    }
    if (usr == "papel") {
        if (cpu == "piedra") {
            alert('Ganaste!');
            usrScore.increase();
        }
        else if (cpu == "papel") {
            alert('Empate!')
        }
        else if (cpu == "tijeras") {
            alert('Perdiste!')
            cpuScore.increase();
        }
    }
    if (usr == "tijeras") {
        if (cpu == "piedra") {
            alert('Perdiste!');
            cpuScore.increase();
        }
        else if (cpu == "papel") {
            alert('Ganaste!')
            usrScore.increase();
        }
        else if (cpu == "tijeras") {
            alert('Empate!')
        }
    }
    console.log(`CPU: ${cpuScore.getValue()}, USER: ${usrScore.getValue()}`)
    scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;

}

function eleccionCPU() {
    var numeroAleatorio = Math.floor((Math.random() * (4-1)) +1); // genera numero entre el 1 y el 3
    if(numeroAleatorio == 1) {
        maquina = "piedra";
    }
    else if (numeroAleatorio == 2) {
        maquina = "papel";
    }
    else if (numeroAleatorio == 3) {
        maquina = "tijeras";
    }

    console.log(numeroAleatorio);
    console.log ("La maquina ha escogido: " + maquina);

    return maquina;
}

function reset() {
    usrScore.toZero();
    cpuScore.toZero();
    scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;
}