const {Productos} = require('../models/index');
//const Sequelize = require('sequelize');
//const Op = Sequelize.Op;

module.exports = {

    // CREAR PRODUCTO
    create(req, res) {
        console.log('req', req.body);
        Productos.create(
            req.body
        ).then(product => {
            res.json(product);
        })
    },

    //MOSTRAR TODOS LOS PRODUCTOS
    showAll(req, res) {
        console.log('req', req.body);
        Productos.findAll().then(productos => {
            res.json(productos);
        })
    },

    //MOSTRAR DESCRIPCIÓN PRODUCTOS
    showSome(req, res) {
        console.log('req', req.body);
        Productos.findAll({
            attributes: ['id', 'descripcion']
        }).then(productos => {
            res.json(productos);
        })
    },

    //ACTUALIZAR PRODUCTO
    update(req, res) {
        console.log('req', req.body);
        if (req.body.descripcion.lenght != 0){
            Productos.update({
                descripcion: req.body.descripcion
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.json(result);
            });
        }
        
        if (req.body.precio.lenght != 0){
            Productos.update({
                precio: req.body.precio
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.json(result);
            });
        }
        
        if (req.body.estado.lenght != 0){
            Productos.update({
                estado: req.body.estado
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.json(result);
            });
        }
        
    },

    //BORRAR PRODUCTO
    delete(req, res) {
        Productos.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }

}