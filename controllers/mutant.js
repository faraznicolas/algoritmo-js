const { request, response } = require("express");
const { isMutant } = require("../helpers/isMutant");

const postMutant = async (req = request, res = response) => {
    const { dna } = req.body
    const result = await isMutant(dna);
    if (result) {
        res.status(200).json({
            msg: 'OK'
        })
    } else {
        res.status(403).json({
            msg: 'Forbbiden'
        })
    }
};

module.exports = {
    postMutant
}