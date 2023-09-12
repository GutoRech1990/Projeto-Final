// Incluir a conexao com o banco
const db = require("./db");

// Definir caracteristicas da tabela
const Post = db.sequelize.define("notebooks", {
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

// Exportar
module.exports = Post;

// Criar a nossa tabela
// Post.sync({force:true});