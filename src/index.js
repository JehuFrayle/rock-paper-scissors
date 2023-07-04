import './styles/index.css';
import './styles/tablet.css';
import { modal } from './utils/modal';
import { gameStates } from './utils/gameStates';


class player {
    constructor(name, winsTo, gameStatesImages) {
        this.name = name;
        this.winsTo = winsTo;
        this.gameStatesImages = gameStatesImages;
    }
}
const rock = new player('Rock', 'Scissors', gameStates.piedra);
const paper = new player('Paper', 'Rock', gameStates.papel);
const scissors = new player('Scissors', 'Paper', gameStates.tijera);

let scoreBoard;
let gameBoard;

// set the listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    scoreBoard = document.getElementById("score");

    gameBoard = document.querySelector('.juego');
    gameBoard.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            switch (e.target.id) {
                case 'Rock':
                    whoWins(rock, getCPUElection());
                    break;
                case 'Paper':
                    whoWins(paper, getCPUElection());
                    break;
                case 'Scissors':
                    whoWins(scissors, getCPUElection());
                    break;
                default:
                    break;
            }
        }
    });

    document.getElementById('reset').onclick = reset;
});

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
    if (usr === cpu) {
        modal.open({ messages: [`The machine selected: ${cpu.name}.`, 'It is a tie!'], time: 1500, inlineImage: usr.gameStatesImages.normal });
        return;
    }

    if (usr.winsTo.includes(cpu.name)) {
        usrScore.increase();
        scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;
        modal.open({ messages: [`The machine selected: ${cpu.name}.`, 'You won!'], time: 1500, inlineImage: usr.gameStatesImages.win, animation: 'win' });
        return;
    }

    cpuScore.increase();
    scoreBoard.innerHTML = `[ ${usrScore.getValue()} : ${cpuScore.getValue()} ]`;
    modal.open({ messages: [`The machine selected: ${cpu.name}.`, 'You lost!'], time: 1500, inlineImage: usr.gameStatesImages.lose, animation: 'lose' });
}

function getCPUElection() {
    const randomNumber = Math.floor(Math.random() * (3)); // genera numero entre el 0 y el 2
    const election = [rock, paper, scissors]

    const machine = election[randomNumber];
    return machine;
}

function reset() {
    usrScore.toZero();
    cpuScore.toZero();
    scoreBoard.innerHTML = `[ 0 : 0 ]`;
    modal.open({ messages: ['The game has been reset'], time: 1000 });
}