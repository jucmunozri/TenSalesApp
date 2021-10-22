const {Usuarios} = require('../models/index');

module.exports = {

    // CREAR USUARIO
    create(req, res) {
        console.log('req', req.body);
        Usuarios.create(
            req.body
        ).then(usuarios => {
            res.json(usuarios);
        })
    },

    //MOSTRAR TODOS LOS USUARIOS
    showAll(req, res) {
        console.log('req', req.body);
        Productos.findAll().then(usuarios => {
            res.json(usuarios);
        })
    },

    //MOSTRAR VENDEDORES
    showSellers(req, res) {
        console.log('req', req.body);
        Usuarios.findAll({
            attributes: ['id', 'nombre', 'rol']
        }, {
            where: {
                rol: "Vendedor"
            }
        }).then(productos => {
            res.json(productos);
        })
    },

    //ACTUALIZAR USUARIO
    /*update(req, res) {
        console.log('req', req.body);
        Usuarios.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });

    },*/

    //BORRAR USUARIO
    delete(req, res) {
        Usuarios.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }

}