
const regex = /AAAA|CCCC|GGGG|TTTT/g;

const analisisFilas = (adn) => {
    const n = adn.length;
    return new Promise((resolve, reject) => {
        let result = 0
        for (let i = 0; i < n; i++) {
            if (adn[i].match(regex)) {
                result += adn[i].match(regex).length;
                if (result > 1) {
                    return resolve(result);
                }
            };
        }

        return resolve(result);

    })
};

const analisisColumnas = (adn) => {
    const n = adn.length;
    return new Promise((resolve, reject) => {
        let result = 0;
        let aux = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                aux += adn[j][i];
            }
            if (aux.match(regex)) {
                result += aux.match(regex).length;
                if (result > 1) {
                    return resolve(result);
                }
            };
            aux = '';
        }

        return resolve(result);

    })
};

const analisisDiagonal = (adn) => {
    const n = adn.length;
    return new Promise((resolve, reject) => {
        let result = 0;
        let auxDia = '';
        for (let i = 1 - n; i < n; i++) {
            for (let x = -Math.min(0, i), y = Math.max(0, i); x < n && y < n; x++, y++) {
                auxDia += adn[x][y];
            }
            if (auxDia.length >= 4) {
                if (auxDia.match(regex)) {
                    result += auxDia.match(regex).length;
                    if (result > 1) {
                        return resolve(result);
                    }
                };
            }
            auxDia = '';
        }
        return resolve(result);

    })
};
const analisisDiagonalInversa = (adn) => {
    const n = adn.length;
    return new Promise((resolve, reject) => {
        let result = 0;
        let auxDiaInv = ''
        for (let i = 1 - n; i < n; i++) {
            for (let x = -Math.min(0, i), y = Math.max(0, i); x < n && y < n; x++, y++) {
                auxDiaInv += adn[y][n - 1 - x];
            }
            if (auxDiaInv.length >= 4) {
                if (auxDiaInv.match(regex)) {
                    result += auxDiaInv.match(regex).length;
                    if (result > 1) {
                        return resolve(result);
                    }
                };
            }
            auxDiaInv = '';
        }

        return resolve(result);

    })
};

module.exports = {
    analisisFilas,
    analisisColumnas,
    analisisDiagonal,
    analisisDiagonalInversa
}