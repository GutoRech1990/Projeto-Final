// Banco
const Sequelize = require("sequelize");
const sequelize = new Sequelize("projetoapex", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql"
});

// Exportar
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}