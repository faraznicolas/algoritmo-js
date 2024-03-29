

const generarADN = () => {

    const cadena = 'BBBB';
    const max = 10;
    const min = 10;
    const dimension = Math.floor((Math.random() * (max - min + 1)) + min);

    let adn = new Array(dimension);

    for (let x = 0; x < dimension; x++) {
        adn[x] = '';
        for (let y = 0; y < dimension; y++) {
            adn[x] += cadena.charAt(Math.floor(Math.random() * 4));
        }
    }
    console.log(adn);
    return adn;
}

const adn = generarADN()

const regex = /AAAA|CCCC|GGGG|TTTT/g;

const n = adn.length;


//analizo filas
const analisisFilas = () => {
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
const analisisColumnas = () => {
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
const analisisDiagonal = () => {
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
const analisisDiagonalInversa = () => {
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

const main = async () => {
    console.time();
    const filas = analisisFilas();
    const columnas = analisisColumnas();
    const diagonales = analisisDiagonal();
    const diagonalesInv = analisisDiagonalInversa();
    const r = await Promise.all([filas, columnas, diagonales, diagonalesInv]).then(values => {
        const [v1, v2, v3, v4] = values;
        const result = values.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
        console.timeEnd();
        return result;
    });
    console.log(r);

}

//main();
