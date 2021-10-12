import React from 'react'
import '../styles/interfaces.css'

const GestionVentas = () => {
    return ( 
        <div id="divInterfaz">
            {/* <!-- This is GESTIÓN DE VENTAS interface. --> */}
            <div className="containers">
                <div id="titulo">
                    <h2 ALIGN="center">Gestion de Ventas</h2>
                </div>

                <div>
                    <form ALIGN="center" action="" id="form-id" className="form" onSubmit="return alert_confirmation()">
                        
                        <label for="idVenta">ID Venta: </label>
                        <input type="text" name="idVenta" id="idVenta" value="001" />
                        
                        <label for="fechaVenta">Fecha de Venta: </label>
                        <input type="date" name="fechaVentaNuevaVenta" id="fechaVenta" />
                        <br />
                        <label for="vendedor">Vendedor: </label>
                        <select name="vendedor" id="vendedor" onClick="getVendedorName" size="1">
                            <option value="vendedor1">Vendedor 1</option>
                            <option value="vendedor2">Vendedor 2</option>
                            <option value="vendedor3">Vendedor 3</option>
                        </select>
                        <br /><br /><br /><br />
                        {/* <!-- <hr> --> */}

                        <aside>
                            <aside ALIGN="center">
                                <button type="button"
                                // onclick="buscarVenta()"
                                >🔍 Buscar Venta</button>
                            </aside>
                            <table >
                                <tr>
                                    <th>ID Venta</th>
                                    <th>Vendedor</th>
                                    <th>Precio Total</th>
                                    <th>Fecha de Venta</th>
                                    <th>Pago Recibido</th>
                                    <th>Estado</th>
                                </tr>
                                <tr>
                                    <td>ID Venta</td>
                                    <td>Vendedor</td>
                                    <td>Precio Total</td>
                                    <td>Fecha de Venta</td>
                                    <td>Pago Recibido</td>
                                    <td>Estado</td>
                                </tr>
                                <tr>
                                    <td>ID Venta</td>
                                    <td>Vendedor</td>
                                    <td>Precio Total</td>
                                    <td>Fecha de Venta</td>
                                    <td>Pago Recibido</td>
                                    <td>Estado</td>
                                </tr>
                                <tr>
                                    <td>ID Venta</td>
                                    <td>Vendedor</td>
                                    <td>Precio Total</td>
                                    <td>Fecha de Venta</td>
                                    <td>Pago Recibido</td>
                                    <td>Estado</td>
                                </tr>
                            </table>
                        </aside>
                        <br /><br />

                        <div  
                        ALIGN="center"
                        >
                            {/* <!-- <button type="reset" id="boton-vaciar" className="btn btn-danger">Vaciar Formulario</button> --> */}
                            <button type="submit" id="botonEditarVenta" className="btn btn-danger" value="Submit" >Editar Venta</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
     );
}
 
export default GestionVentas;