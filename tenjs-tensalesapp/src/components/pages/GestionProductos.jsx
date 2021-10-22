import React from "react";
import "../styles/interfaces.css";

const GestionProductos = () => {
  return (
    <div id="divInterfaz">
      {/* <!-- This is GESTIÓN DE Productos interface. --> */}
      <div className="containers">
        <div id="titulo">
          <h2 ALIGN="center">Gestión de Productos</h2>
        </div>

        <div>
          <form
            ALIGN="center"
            action=""
            id="form-id"
            className="form"
            onSubmit="return alert_confirmation()"
          >
            <label for="Idproducto">ID Producto: </label>
            <input
              type="text"
              name="Idproducto"
              id="Idproducto"
              // onKeyUp='tableSearch()'
            />
            <br />

            <label for="Descripción">Descripción: </label>
            <input
              type="text"
              name="Descripción"
              id="descripcion"
              // onKeyUp='tableSearch1()'
            />

            <label for="Precio">Precio: </label>
            <input
              type="text"
              name="Precio"
              id="precio"
              // onKeyUp='tableSearch2()'
            />

            <label for="estadoProducto">Estado: </label>
            <select
              id="estadoProducto"
              // onInput="filterTable()"
            >
              <option>Todos</option>
              <option>Disponible</option>
              <option>No Disponible</option>
            </select>

            <aside>
              <aside ALIGN="center">
                <button
                  type="button"
                  //  onclick="buscarProducto()"
                >
                  🔍 Buscar Poducto
                </button>
              </aside>

              <br />
              <br />

              <table
                id="myTable"
                // style="width:95%"
                data-filter-control="true"
                data-show-search-clear-button="true"
              >
                <tr>
                  <th id="Idproducto">ID Producto</th>
                  <th>Descripción</th>
                  <th>Disponible</th>
                  <th>Precio Unitario</th>
                </tr>
                <tr>
                  <td>a45789</td>
                  <td>Inoxidable</td>
                  <td>Disponible</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>b538</td>
                  <td>Corrugado</td>
                  <td>Disponible</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>j355</td>
                  <td>Laminado</td>
                  <td>Disponible</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>p23h</td>
                  <td>Aleacion</td>
                  <td>No Disponible</td>
                  <td>10044</td>
                </tr>
                <tr>
                  <td>f23522ff</td>
                  <td>Dulce</td>
                  <td>No Disponible</td>
                  <td>2324</td>
                </tr>
              </table>
            </aside>

            <div className="boton" ALIGN="center">
              <button
                type="submit"
                id="botonEditarProducto"
                className="btn btn-danger"
                value="Submit"
              >
                Editar Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GestionProductos;
