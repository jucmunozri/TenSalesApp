const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3008, () => {
    console.log("Servidor corriendo en el puerto 3008");
  });
});

const bd = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "tensalesappjk",
});

app.post("/create", (req, res) => {
  const rol = req.body.rol;
  const nombre = req.body.nombre;
  const estado = req.body.estado;

  bd.query(
    "INSERT INTO usuarios (rol, nombre, estado) VALUES (?,?,?)",
    [rol, nombre, estado],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores insertados");
      }
    }
  );
});

// CREATE PRODUCTOS
app.post("/createProducto", (req, res) => {
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const estado = req.body.estado;

  bd.query(
    "INSERT INTO productos (descripcion, precio, estado) VALUES (?,?,?)",
    [descripcion, precio, estado],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores insertados");
      }
    }
  );
});

app.get("/show", (req, res) => {
  bd.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// SHOW PRODUCTO
app.get("/showProducto", (req, res) => {
  bd.query("SELECT * FROM productos", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// SHOW PRODUCTO descripcion
app.get("/showProductoDescripcion", (req, res) => {
  bd.query("SELECT id, descripcion FROM productos", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// SHOW VENDEDORES
app.get("/showIdVenta", (req, res) => {
  bd.query("SELECT id FROM ventas", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// SHOW VENDEDORES
app.get("/showVendedores", (req, res) => {
  bd.query("SELECT id, rol, nombre FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const rol = req.body.rol;
  const nombre = req.body.nombre;
  const estado = req.body.estado;

  bd.query(
    "UPDATE usuarios SET rol = ?, nombre = ?, estado = ?  WHERE id = ?",
    [rol, nombre, estado, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//UPDATE PRODUCTOS
app.put("/updateProducto", (req, res) => {
  const id = req.body.id;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const estado = req.body.estado;

  bd.query(
    "UPDATE productos SET descripcion = ?, precio = ?, estado = ?  WHERE id = ?",
    [descripcion, precio, estado, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  bd.query("DELETE FROM usuarios WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//DELETE PRODUCTOS
app.delete("/deleteProducto/:id", (req, res) => {
  const id = req.params.id;
  bd.query("DELETE FROM productos WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
