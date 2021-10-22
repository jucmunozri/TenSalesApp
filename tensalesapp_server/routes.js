const express = require('express');
const router = express.Router();
const axios = require('axios');


// Importar controladores
const ProductControllers = require('./controllers/ProductControllers');
const UsersControllers = require('./controllers/UsersControllers');
const SalesControllers = require('./controllers/SalesControllers');


// Productos
 router.post('/createProducto', ProductControllers.create);
 router.get('/showProductoDescripcion', ProductControllers.showSome);
 router.get('/showProducto', ProductControllers.showAll);
 router.patch('/updateProducto', ProductControllers.update);
 router.delete('/deleteProducto/:id', ProductControllers.delete);
 
 
 //Usuarios
 router.post('/create', UsersControllers.create);
 router.get('/show', UsersControllers.showAll);
 router.get('/showVendedores', UsersControllers.showSellers);
 //router.patch('/update', UsersControllers.update);
 router.delete('/delete/:id', UsersControllers.delete);
 

 //Ventas
 router.post('/createVenta', SalesControllers.create);
 router.get('/showVenta', SalesControllers.showAll);
 router.get('/showIdVenta', SalesControllers.showID);
 router.patch('/updateVenta', SalesControllers.update);
 router.delete('/deleteVenta/:id', SalesControllers.delete);


 //DetallesVentas
 router.post('/createDetallesVenta', SalesControllers.createDV);
 router.get('/showDetallesVenta', SalesControllers.showSale);


 /*router.get('/test/test', (req, res)=>{ 
	res.json({"message": "aplicacion desplegada"});
 });*/


module.exports = router;