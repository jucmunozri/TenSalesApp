const {Ventas, DetallesVenta} = require('../models/index');
//const Sequelize = require('sequelize');
//const Op = Sequelize.Op;

module.exports = {

    // CREAR VENTA
    create(req, res) {
        console.log('req', req.body);
        Ventas.create(
            req.body
        ).then(ventas => {
            res.json(ventas);
        })
    },

    // CREAR DETALLES VENTA
    createDV(req, res) {
        console.log('req', req.body);
        DetallesVenta.create(
            req.body
        ).then(product => {
            res.json(product);
        })
    },

    //MOSTRAR TODAS LAS VENTAS
    showAll(req, res) {
        console.log('req', req.body);
        Productos.findAll().then(ventas => {
            res.json(ventas);
        })
    },

    //MOSTRAR DESCRIPCIÓN VENTAS
    /*showSome(req, res) {
        console.log('req', req.body);
        Productos.findAll({
            attributes: ['id', 'descripcion']
        }).then(productos => {
            res.json(productos);
        })
    },*/

    //MOSTRAR ID VENTA
    showID(req, res) {
        console.log('req', req.body);
        Productos.findAll({
            attributes: ['id']
        }).then(productos => {
            res.json(productos);
        })
    },

    //MOSTRAR DETALLES DE LA VENTA
    showSale(req, res) {
        console.log('req', req.body);
        DetallesVenta.findAll({
            where: {
                idVenta: req.params.idVenta
            }
        }).then(ventas => {
            res.json(ventas);
        })
    },

    //ACTUALIZAR VENTA
    update(req, res) {
        console.log('req', req.body);
        if (req.body.estado.lenght != 0){
            Ventas.update({
                estado: req.body.estado
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.json(result);
            });
        }
        
        if (req.body.valor.lenght != 0){
            Ventas.update({
                valor : req.body.valor
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.json(result);
            });
        }
        
    },

    //BORRAR VENTA
    delete(req, res) {
        Ventas.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }

}