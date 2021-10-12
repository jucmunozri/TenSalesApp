import React from "react";
import "../styles/interfaces.css";

const RegistroVenta = () => {
  return (
    <div id="divInterfaz">
      <div className="containers">
        <div id="titulo">
          <h2 ALIGN="center">Registrar Venta</h2>
        </div>

        <div>
          <form
            ALIGN="center"
            action=""
            id="form-id"
            className="form"
            onSubmit="return alert_confirmation()"
          >
            <label for="idNuevaVenta">ID Venta: </label>
            <input
              type="text"
              name="idNuevaVenta"
              id="idNuevaVenta"
              value="001"
              readonly
            />
            <br />

            <label for="cedulaNuevaVenta">Cédula: </label>
            <input
              type="text"
              name="cedulaNuevaVenta"
              id="cedulaNuevaVenta"
              required
            />

            <label for="nombreClienteNuevaVenta">Nombre del Cliente: </label>
            <input
              type="text"
              name="nombreClienteNuevaVenta"
              id="nombreClienteNuevaVenta"
              required
            />

            <label for="vendedorNuevaVenta">Vendedor: </label>
            <select
              name="vendedorNuevaVenta"
              id="vendedorNuevaVenta"
              onClick="getVendedorName"
              size="1"
              required
            >
              <option value="vendedor1">Vendedor 1</option>
              <option value="vendedor2">Vendedor 2</option>
              <option value="vendedor3">Vendedor 3</option>
            </select>
            <br />

            <label for="fechaVentaNuevaVenta">Fecha de Venta: </label>
            <input
              type="date"
              name="fechaVentaNuevaVenta"
              id="fechaVentaNuevaVenta"
              required
            />

            <label for="fechaPagoNuevaVenta">Fecha de Pago: </label>
            <input
              type="date"
              name="fechaPagoNuevaVenta"
              id="fechaPagoNuevaVenta"
              required
            />
            <br />

            <br />
            <br />
            {/* <!-- <hr> --> */}
            <aside>
              <aside ALIGN="center">
                <button
                  type="button"
                  // onclick="buscarProducto()"
                >
                  🔍 Buscar Producto
                </button>
              </aside>
              <table>
                <tr>
                  <th>ID Producto</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Precio Total</th>
                </tr>
                <tr>
                  <td>ID Producto</td>
                  <td>Descripción</td>
                  <td>Cantidad</td>
                  <td>Precio Unitario</td>
                  <td>Precio Total</td>
                </tr>
                <tr>
                  <td>ID Producto</td>
                  <td>Descripción</td>
                  <td>Cantidad</td>
                  <td>Precio Unitario</td>
                  <td>Precio Total</td>
                </tr>
                <tr>
                  <td>ID Producto</td>
                  <td>Descripción</td>
                  <td>Cantidad</td>
                  <td>Precio Unitario</td>
                  <td>Precio Total</td>
                </tr>
              </table>

              <div className="VentaTotal" ALIGN="center">
                <p className="textoValorVenta">
                  {" "}
                  Valor Total: <span id="totalVenta"></span>$
                </p>
              </div>
            </aside>

            <br />
            <br />
            <div
              // className={boton}
              ALIGN="center"
            >
              <button type="reset" id="boton-vaciar" className="btn btn-danger">
                Vaciar Formulario
              </button>
              <button
                type="submit"
                id="botonConfirmarNuevaVenta"
                className="btn btn-danger"
                value="Submit"
                // onsubmit=confirmarNuevaVenta()
              >
                {" "}
                Confirmar Venta
              </button>
              {/* // <!-- Este button_onsubmit no está en uso since the form_onsubmit is calling the function alert_confirmation() --> */}
            </div>
            {/* // <!-- <label for="botonConfirmarNuevaVenta">Confirmar Venta</label>
                        //     <input type="submit" id="botonConfirmarNuevaVenta" className="submit" value="Submit" onsubmit=confirmarNuevaVenta()> --> */}
            {/* // <!-- <div className="ConfirmarVenta" ALIGN="center"> --> */}

            {/* <!-- </div> --> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroVenta;
