import React, { useEffect, useState } from "react";
import logo from '../assets/logo/TenSalesAppLogo.png';
import user from "../assets/fotoperfil.png";

import MenuItem from "./MenuItem";



/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Productos",
    exact: true,
    to: `/Productos`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Registrar Producto", to: "/Productos/RegistrarProducto" },
      { name: "Gestion de Productos", to: "/Productos/GestionProductos" },
    ],
  },

  {
    name: "Ventas",
    exact: true,
    to: `/Ventas`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Registrar Venta", to: "/Ventas/RegistroVenta" },
      { name: "Gestion de Ventas", to: "/Ventas/GestionVentas" },
    ],
  },

  {
    name: "Administracion",
    exact: true,
    to: `/Administracion`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Gestion de Usuarios", to: "/Administracion/GestionUsuarios" },
    ],
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="TenSalesApp" />
        </div>
        {/* <span>TenSalesApp</span> */}
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      {/* <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Guts</h5>
          <p>Administrador</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
