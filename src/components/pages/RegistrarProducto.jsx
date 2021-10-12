import React from "react";
import "../styles/interfaces.css";

const RegistroProducto = () => {
  return (
    <div id="divInterfaz">
      <div className="containers">
        <div id="titulo">
          <h2 ALIGN="center">Registrar Producto</h2>
        </div>

        <div>
          <form
            ALIGN="center"
            action=""
            id="form-id"
            className="form"
            onSubmit="return alert_confirmation()"
          >
            <span className="input-group-text" id="basic-addon1">
              Tipo de producto
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option selected>Tipo de Producto</option>
              <option value="1">Prod1</option>
              <option value="2">Prod2</option>
              <option value="3">Prod3</option>
            </select>

            <span className="input-group-text" id="basic-addon1">
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; ID
            </span>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
            <br />

            <span className="input-group-text" id="basic-addon1">
              Descripción
            </span>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />

            <span className="input-group-text" id="basic-addon1">
              Precio
            </span>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />

            <span className="input-group-text" id="basic-addon1">
              Estado
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option selected>Estado</option>
              <option value="1">Disponible</option>
              <option value="2">No disponible</option>
            </select>

            {/* <!--<aside>
                                <aside ALIGN="right">
                                <button type="button" onClick="buscarProducto()">🔍 Buscar Producto</button>
                            </aside> --> */}

            <br />
            <br />
            <br />
            <br />

            <aside>
              <table
              // style="width:95%"
              >
                <tr>
                  <th>ID Producto</th>
                  <th>Descripción</th>
                  <th>Tipo de producto</th>
                  <th>Disponible</th>
                  <th>Precio Unitario</th>
                </tr>
                <tr>
                  <td>ID Producto</td>
                  <td>Descripción</td>
                  <td>Tipo de producto</td>
                  <td>Disponible</td>
                  <td>Precio Unitario</td>
                </tr>
                <tr>
                  <td>ID Producto</td>
                  <td>Descripción</td>
                  <td>Tipo de producto</td>
                  <td>Disponible</td>
                  <td>Precio Unitario</td>
                </tr>
                <tr>
                  <td>ID Producto</td>
                  <td>Descripción</td>
                  <td>Tipo de producto</td>
                  <td>Disponible</td>
                  <td>Precio Unitario</td>
                </tr>
              </table>
            </aside>

            <div
              // className={boton}
              ALIGN="center"
            >
              <button type="reset" id="botonVaciar" className="btn btn-ttc">
                Vaciar Formulario
              </button>

              <button
                type="submit"
                id="botonGuardar"
                className="btn btn-ttc"
                value="Submit"
                // onSubmit=Guardar()
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroProducto;
