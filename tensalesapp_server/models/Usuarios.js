module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define(
    "Usuarios",
    {
      // id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
