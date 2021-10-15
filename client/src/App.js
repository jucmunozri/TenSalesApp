import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// RESOLVER ESTE IMPORT
import RegistrarVenta from "./components/pages/RegistrarVenta";
import GestionVentas from "./components/pages/GestionVentas";
import GestionProductos from "./components/pages/GestionProductos";
import RegistrarProducto from "./components/pages/RegistrarProducto";
import GestionUsuarios from "./components/pages/GestionUsuarios";
import Logo from "./components/Logo";

// const Dashboard = () => <h1></h1>;

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* Improvememt, this is just looping through menuItems
          instead of hard coding all the routes
          
          */}
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}

          <Switch>
            <Route exact path={"/"}>
              <Logo />
            </Route>
            <Route exact path={"/Productos/RegistrarProducto"}>
              <RegistrarProducto />
            </Route>
            <Route exact path={"/Productos/GestionProductos"}>
              <GestionProductos />
            </Route>
            <Route exact path={"/Ventas/RegistrarVenta"}>
              <RegistrarVenta />
            </Route>
            <Route exact path={"/Ventas/GestionVentas"}>
              <GestionVentas />
            </Route>
            <Route exact path={"/Administracion/GestionUsuarios"}>
              <GestionUsuarios />
            </Route>
            <Route exact path={"/Productos"}>
              <Logo />
            </Route>
            <Route exact path={"/Ventas"}>
              <Logo />
            </Route>
            <Route exact path={"/Administracion"}>
              <Logo />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
