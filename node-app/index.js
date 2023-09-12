// Constantes
const express = require("express");
const app = express();
const Post = require("./post");
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Rotas de ação
// -- para adicionar publicacoes 
app.get("/", async(req, res)=>{
    Post.findAll().then(function(posts){
        res.send({posts:posts})
    }).catch(function(erro){
        res.send("Erro: " + erro)
    })
})

app.post("/add", function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo  
    }).then(function(){
        res.send("ok")
    }).catch(function(erro){
        res.send("Falha ao inserir registro! Erro: " + erro)
    })
})

app.post("/edit/:id", function(req, res) {
    Post.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo},
        {where:{"id": req.params.id}
    }).then(function() {
        res.send("ok")
    }).catch(function(erro) {
        res.send("Falha ao atualizar registro! Erro: " + erro);
    });
});

// -- para deletar publicacoes 
app.get("/deletar/:id", function(req,res){
    Post.destroy({
        where:{"id": req.params.id}
    }).then(function(){
        res.send("ok")
    }).catch(function(erro){
        res.send("Falha ao inserir registro! Erro: " + erro)
    })
}) 


// Servidor
app.listen(8081, function(){
    console.log("rodando na porta 8081")
})