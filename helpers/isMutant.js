const { analisisFilas, analisisColumnas, analisisDiagonal, analisisDiagonalInversa } = require("../utils/analisis");

const isMutant = async (adn) => {
    const filas = analisisFilas(adn);
    const columnas = analisisColumnas(adn);
    const diagonales = analisisDiagonal(adn);
    const diagonalesInv = analisisDiagonalInversa(adn);
    const r = await Promise.all([filas, columnas, diagonales, diagonalesInv]).then(values => {
        const [v1, v2, v3, v4] = values;
        const result = values.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
        return result;
    });
    return r > 1 ? true : false;
}

module.exports = {
    isMutant
}