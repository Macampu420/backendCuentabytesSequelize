import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";
import schemaDetVenta from "./DetVenta.js";
import schemaProveedor from "./Proveedor.js";
import schemaDetCompra from "./DetCompraProducto.js";

const schemaEncCompra = sequelize.define('tbl_enc_compra_producto', {
    idCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valorTotalCompra:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorDescuento:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fechaCompra',
    updatedAt: false
});

schemaEncCompra.hasMany(schemaDetCompra, {foreignKey: 'idCompra', onDelete: 'RESTRICT'});

schemaEncCompra.belongsTo(schemaProveedor, {
    foreignKey: 'idProveedor',
    onDelete: 'RESTRICT'
});
export default schemaEncCompra;