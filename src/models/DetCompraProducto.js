import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";
import schemaProducto from "./Producto.js";

const schemaDetCompra = sequelize.define('tbl_det_compras', {
    idDetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    unidadesCompradas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
}, { timestamps: false });

schemaDetCompra.belongsTo(schemaProducto, {
    foreignKey: 'idProducto'
});

export default schemaDetCompra;