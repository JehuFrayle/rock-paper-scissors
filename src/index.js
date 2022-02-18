import './style.css';
let usuario;
let maquina;

class player {
    constructor(name, winsTo) {
        this.name = name;
        this.winsTo = winsTo;
    }
}
const rock = new player('Rock', 'Scissors');
const paper = new player('Paper', 'Rock');
const scissors = new player('Scissors', 'Paper');

const scoreBoard = document.getElementById("score");

document.getElementById('Rock').onclick = function() {whoWins(rock, CPUElection())};
document.getElementById('Paper').onclick = function() {whoWins(paper, CPUElection())};
document.getElementById('Scissors').onclick = function() {whoWins(scissors, CPUElection())};
document.getElementById('reset').onclick = function() {reset()};

function makeCounter() {
    let counter = 0;

    return {
        increase: function () {
            counter++;
            return counter;
        },
        getValue: function () {
            return counter;
        },
        toZero: function () {
            counter = 0;
            return counter;
        }
    }
}

const cpuScore = makeCounter();
const usrScore = makeCounter();

function whoWins(usr, cpu) {
    if (usr != cpu) {
        if (usr.winsTo.includes(cpu.name)) {
            usrScore.increase();
            scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;
            alert('Ganaste!');
        }
        else {
            cpuScore.increase();
            scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;
            alert('Perdiste!');
        }

    }
    else {
        alert('Empate');
    }
    console.log(`CPU: ${cpuScore.getValue()}, USER: ${usrScore.getValue()}`)
    scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;

}

function CPUElection() {
    let randomNumber = Math.floor(Math.random() * (3)); // genera numero entre el 0 y el 2
    const election = [rock, paper, scissors]

    machine = election[randomNumber];
    console.log(randomNumber);
    console.log("The machine has selected: " + machine.name);

    return machine;
}

function reset() {
    usrScore.toZero();
    cpuScore.toZero();
    scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;
}