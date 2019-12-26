//se requiere en ROUTES de index.js
const express = require('express');
const router = express.Router();
const objetoController = require('../controllers/objeto.controller');

//funciones en el objeto.controller.js
router.get('/', objetoController.getObjetos);  
router.post('/', objetoController.createObjeto);
router.get('/:id', objetoController.getObjeto);
router.put('/:id', objetoController.editObjeto);
router.delete('/:id', objetoController.deleteObjeto);



module.exports = router;