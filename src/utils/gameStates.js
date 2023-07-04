import Piedra from '../assets/Piedra.svg';
import Papel from '../assets/Papel.svg';
import Tijera from '../assets/Tijera.svg';

import PiedraFeliz from '../assets/Piedra_feliz.svg';
import PapelFeliz from '../assets/Papel_feliz.svg';
import TijeraFeliz from '../assets/Tijera_feliz.svg';

import PiedraEnojada from '../assets/Piedra_enojada.svg';
import PapelTriste from '../assets/Papel_triste.svg';
import TijeraTriste from '../assets/Tijera_triste.svg';

export const gameStates = {
    piedra: {
        win: PiedraFeliz,
        lose: PiedraEnojada,
        normal: Piedra,
    },
    papel: {
        win: PapelFeliz,
        lose: PapelTriste,
        normal: Papel,
    },
    tijera: {
        win: TijeraFeliz,
        lose: TijeraTriste,
        normal: Tijera,
    }
}