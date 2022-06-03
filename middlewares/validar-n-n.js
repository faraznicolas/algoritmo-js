const { response, request } = require("express");

const validarNxN = (req = request, res = response, next) => {

    const { dna } = req.body;
    const n1 = dna.length;
    for (let i = 0; i < n1; i++) {
        if (dna[i].length != n1) {
            return res.status(400).json({
                ok: false,
                error: "La matriz no cumple con el requisito de nxn"
            });
        }
    }
    next();
}

module.exports = { validarNxN }