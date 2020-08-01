const express = require("express");
const ProductController = require("./controllers/ProductController");

//Cria roteador de rotas da api
const routes = express.Router();

//Cria rota /products de acordo com o método HTTP solicitado, 
//executando uma função/método de retorno desejado
routes.get("/products", ProductController.indexAsync);
routes.get("/products/:id", ProductController.showAsync);
routes.post("/products", ProductController.createAsync);
routes.put("/products/:id", ProductController.updateAsync);
routes.delete("/products/:id", ProductController.destroyAsync);

//Exporta objeto routes para ser usado em outros arquivos
module.exports = routes;