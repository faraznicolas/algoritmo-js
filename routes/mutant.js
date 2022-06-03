const { Router } = require("express");
const { check } = require("express-validator");
const { postMutant } = require("../controllers/mutant");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarNxN } = require("../middlewares/validar-n-n");

const router = Router();
router.post('/', [
    check('dna', 'El campo es obligatorio').not().isEmpty(),
    validarNxN,
    validarCampos
], postMutant);

module.exports = router;