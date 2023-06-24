import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";
import schemaProducto from "./Producto.js";

const schemaDetVenta = sequelize.define('tbl_det_ventas', {
    idDetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    unidadesVendidas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
}, {
    timestamps: true,
    createdAt: 'fechaVenta',
    updatedAt: false
});

schemaDetVenta.belongsTo(schemaProducto, {
    foreignKey: 'idProducto'
});

export default schemaDetVenta;