console.time();
const { dna: adn } = {
    dna: ["ATGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"]
}

const regex = /AAAA|CCCC|GGGG|TTTT/;

const n = adn.length;


//analizo filas
for (let i = 0; i < n; i++) {
    if (adn[i].match(regex)) {
        console.log('TRUE EN FILAS');
        console.log(adn[i]);
        break;
    };
}


//analizo columnas
let aux = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        aux += adn[j][i];
    }
    if (aux.match(regex)) {
        console.log('TRUE EN COLUMNAS');
        console.log(aux);
        break;
    };
    aux = '';
}

//analizo diagonales ARRIBA ABJAO
let auxDia = '';
for (let i = 1 - n; i < n; i++) {
    for (let x = -Math.min(0, i), y = Math.max(0, i); x < n && y < n; x++, y++) {
        auxDia += adn[x][y];
    }
    if (auxDia.length >= 4) {
        if (auxDia.match(regex)) {
            console.log('TRUE EN ARRIBA ABJAO');
            console.log(auxDia);
            break;
        };
    }
    auxDia = '';
}

//analizo diagonales ABAJO ARRIBA
let auxDiaInv = ''
for (let i = 1 - n; i < n; i++) {
    for (let x = -Math.min(0, i), y = Math.max(0, i); x < n && y < n; x++, y++) {
        auxDiaInv += adn[y][n - 1 - x];
    }
    if (auxDiaInv.length >= 4) {
        if (auxDiaInv.match(regex)) {
            console.log('TRUE EN COLUMNAS');
            console.log(auxDiaInv);
            break;
        };
    }
    auxDiaInv = '';
}



console.timeEnd()