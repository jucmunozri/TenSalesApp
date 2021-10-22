'use strict';
module.exports = (sequelize, DataTypes) => {
  const Detalles = sequelize.define(
    "Ventas",
    {
      idProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      idVenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      precioUnitario: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },

      precioTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    },
    
    { timestamps: false }
  );

  /*Detalles.associate = (models) => {
    Ventas.belongsToMany(models.Productos, {
      through: "infoVenta",
      timestamps: false,
      foreignkey: { name: "id", allowNull: false },
    });
  };*/

  return Detalles;
};