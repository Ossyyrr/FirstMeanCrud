const Objeto = require('../models/objeto');


const objetoController = {};

objetoController.getObjetos =  async (req, res) => {
    const objetos = await Objeto.find();
    res.json(objetos);

}

objetoController.createObjeto = async (req, res) => {
    const objeto = new Objeto({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await objeto.save();
    console.log(objeto);
    res.json({'status': 'SAVED'});
}


objetoController.getObjeto = async (req, res) => {
   const objeto = await Objeto.findById(req.params.id); //obtener ID
   res.json(objeto);
}

objetoController.editObjeto =async (req, res) => {
    const objeto = { //-----------------------------------------------------
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
     }
    await Objeto.findByIdAndUpdate(req.params.id,{$set:objeto}, {new:true}); //obtener ID
    res.json({'status': 'UPDATED'});
 }

objetoController.deleteObjeto = async (req, res) => {
    await Objeto.findByIdAndRemove(req.params.id); //obtener ID
    res.json({'status':'DELETED'});
 }

module.exports = objetoController;