module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define(
    "Productos",
    {
      // id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  Productos.associate = (models) => {
    Productos.belongsToMany(models.Ventas, {
      through: "infoVenta",
      timestamps: false,
      foreignkey: { name: "id", allowNull: false },
    });
  };
  return Productos;
};
