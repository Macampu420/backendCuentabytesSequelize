import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";

const schemaProveedor = sequelize.define('tbl_proveedor', {
    idProveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombresProveedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccionProveedor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefonoProveedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default schemaProveedor;