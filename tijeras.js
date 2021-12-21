var usuario;
var maquina;

var papel = "Papel";
var piedra = "Piedra";
var tijeras = "Tijeras";

function quienGana(usr, cpu) {
    if (usr == piedra) {
        if (cpu == piedra) {
            alert('Empate!');
        }
        else if (cpu == papel) {
            alert('Perdiste!')
        }
        else if (cpu = tijeras) {
            alert('Ganaste!')
        }
    }
    if (usr == papel) {
        if (cpu == piedra) {
            alert('Ganaste!');
        }
        else if (cpu == papel) {
            alert('Empate!')
        }
        else if (cpu = tijeras) {
            alert('Perdiste!')
        }
    }
    if (usr == tijeras) {
        if (cpu == piedra) {
            alert('Perdiste!');
        }
        else if (cpu == papel) {
            alert('Ganaste!')
        }
        else if (cpu = tijeras) {
            alert('Empate!')
        }
    }
}

function eleccionCPU() {
    var numeroAleatorio = Math.floor((Math.random() * (4-1)) +1); // genera numero entre el 1 y el 3
    if(numeroAleatorio == 1) {
        maquina = piedra;
    }
    else if (numeroAleatorio == 2) {
        maquina = papel;
    }
    else if (numeroAleatorio == 3) {
        maquina = tijeras;
    }

    console.log(numeroAleatorio);
    console.log ("La maquina escogio: " + maquina);

    return maquina;
}

quienGana(piedra, eleccionCPU());