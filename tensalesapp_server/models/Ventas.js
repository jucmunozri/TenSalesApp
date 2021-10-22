'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ventas = sequelize.define(
    "Ventas",
    {
      cedula: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      vendedor: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      fechaVenta: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      valorTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendiente"
      },
    },
    { timestamps: false }
  );

  Ventas.associate = (models) => {
    Ventas.belongsToMany(models.Productos, {
      through: "infoVenta",
      timestamps: false,
      foreignkey: { name: "id", allowNull: false },
    });
  };

  return Ventas;
};
