import { Sequelize } from "sequelize";

const sequelize = new Sequelize('cuentabytes', 'postgres', 'macampu123', {
    host: '127.0.0.1',
    dialect: 'postgres'
  });

export default sequelize;