import React from "react";
import "../styles/interfaces.css";
import { useState } from "react";
import Axios from "axios";

const RegistrarProducto = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const addProduct = () => {
    Axios.post("http://localhost:3001/createProduct", {
      name: name,
      description: description,
      price: price,
      status: status,
    }).then(() => {
      alert("Producto añadido exitosamente");
    });
  };

  const displayInfo = () => {
    console.log(name + description + price + status);
  };

  return (
    <div id="divInterfaz">
      <div className="containers">
        <div id="titulo">
          <h2 ALIGN="center">Registrar Producto</h2>
        </div>

        <div>
            <label className="input-group-text" id="basic-addon1">
              Tipo de producto
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Tipo de Producto</option>
              <option value="1">Prod1</option>
              <option value="2">Prod2</option>
              <option value="3">Prod3</option>
            </select>

            <label>Nombre</label>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <br />

            <span className="input-group-text" id="basic-addon1">
              Descripción
            </span>
            <input
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />

            <span className="input-group-text" id="basic-addon1">
              Precio
            </span>
            <input
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />

            <span className="input-group-text" id="basic-addon1">
              Estado
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => {
                setStatus(event.target.value);
              }}
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

            {/* <aside>
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
            </aside> */}

            <div
              // className={boton}
              ALIGN="center"
            >
              {/* <button type="reset" id="botonVaciar" className="btn btn-ttc">
                Vaciar Formulario
              </button> */}

              <button
                // type="submit"
                // id="botonGuardar"
                //className="btn btn-ttc"
                // value="Submit"
                onClick={addProduct}
              >
                Guardar
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarProducto;
