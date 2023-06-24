import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";
import schemaDetVenta from "./DetVenta.js";
import schemaCliente from "./Clientes.js";

const schemaEncVenta = sequelize.define('tbl_enc_ventas', {
    idVenta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valorTotalVenta:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorDescuento:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fechaVenta',
    updatedAt: false
});

schemaEncVenta.hasMany(schemaDetVenta, { foreignKey: 'idVenta' });
schemaEncVenta.belongsTo(schemaCliente, {
    foreignKey: 'idCliente',
    onDelete: 'RESTRICT'
});

export default schemaEncVenta;