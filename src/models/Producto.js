import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";

const schemaProducto = sequelize.define('tbl_productos', {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreProducto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcionProducto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costoProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioVenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    existenciaProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});


export default schemaProducto;