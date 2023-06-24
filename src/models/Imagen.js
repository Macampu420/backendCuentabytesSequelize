import { DataTypes } from "sequelize";
import sequelize from "../conexion.js";
import schemaProducto from "./Producto.js";

const schemaImagen = sequelize.define('tbl_imagenes', {
    idImagen: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    nombreImagen: {
        type: DataTypes.STRING, 
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

schemaImagen.belongsTo(schemaProducto, {
    foreignKey: 'idProducto',
    onDelete: 'NO ACTION'
});

export default schemaImagen;