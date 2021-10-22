import React from "react";
import "../styles/interfaces.css";

const GestionUsuarios = () => {
  return (
    <div id="divInterfaz">
      {/* <!-- This is GESTIÓN DE Usuarios interface. --> */}
      <div className="containers">
        <div id="titulo">
          <h2 ALIGN="center">Gestión de Usuarios</h2>
        </div>

        <div>
          <form
            ALIGN="center"
            action=""
            id="form-id"
            className="form"
            // onSubmit={alert_confirmation}
          >
            <label for="idUsuario">ID Usuario: </label>
            <input type="text" name="idUsuario" id="idUsuario" value="001" />

            <label for="rolU">Rol de Usuario: </label>
            <select
              name="rolU"
              id="estadoU"
              // onClick={getRol}
              size="1"
            >
              <option value="administrador">Administrador</option>
              <option value="vendedor">Vendedor</option>
            </select>

            <label for="nombreUsuario">
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Nombre:{" "}
            </label>
            <input
              type="text"
              name="nombreUsuario"
              id="nombreUsuario"
              value="Nombre"
            />
            <br />
            <label for="estadoU">Estado de Usuario: </label>
            <select name="estadoU" id="estadoU" onClick="getEstado" size="1">
              <option value="pendiente">Pendiente</option>
              <option value="autorizado">Autorizado</option>
              <option value="noautorizado">No Autorizado</option>
            </select>
            <br />
            <br />
            <aside ALIGN="center">
              <button
                type="button"
                // onClick="buscarUsuario()"
              >
                🔍 Buscar Usuario
              </button>
            </aside>
            <br />
            <br />
            {/* <!-- <hr> --> */}

            <aside>
              <table
              // style="width:95%"
              >
                <tr>
                  <th>ID Usuario</th>
                  <th>Nombre de Usuario</th>
                  <th>Estado</th>
                  <th>Rol</th>
                  <th>Permisos</th>
                </tr>
                <tr>
                  <td>ID Usuario</td>
                  <td>Nombre de Usuario</td>
                  <td>Estado</td>
                  <td>Rol</td>
                  <td>Permisos</td>
                </tr>
                <tr>
                  <td>ID Usuario</td>
                  <td>Nombre de Usuario</td>
                  <td>Estado</td>
                  <td>Rol</td>
                  <td>Permisos</td>
                </tr>
                <tr>
                  <td>ID Usuario</td>
                  <td>Nombre de Usuario</td>
                  <td>Estado</td>
                  <td>Rol</td>
                  <td>Permisos</td>
                </tr>
              </table>
            </aside>

            {/* <!-- <button type="reset" id="boton-vaciar" className="btn btn-danger">Vaciar Formulario</button> --> */}
            <div
              // className={boton}
              ALIGN="center"
            >
              <button
                type="submit"
                id="botonEditarUsuario"
                className="btn btn-danger"
                value="Submit"
                // onsubmit={editarUsuario}
              >
                Editar Usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GestionUsuarios;
