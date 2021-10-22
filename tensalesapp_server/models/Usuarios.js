'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define(
    "Usuarios",
    {

      rol: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Vendedor"
      },

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      /*estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },*/

      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  );

  Usuarios.associate = (models) => {
    Usuarios.hasMany(models.Ventas, {
      onDelete: "cascade",
    });
  };
  return Usuarios;
};
