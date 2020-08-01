const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("requiredir");

//Inicia o web server express da aplicação
const app = express();

//Habilita o recebimento de dados no formato JSON ao invés de URL encoded
app.use(express.json());

//Habilita o CORS, permitindo que outros domínios acessem a aplicação
app.use(cors());

//Configura a conexão com o banco de dados, adicionando algumas
//opções extras para evitar deprecated warnings
mongoose.connect(
  "mongodb://localhost:27017/huntapi",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

//Requere todos os arquivos dentro da pasta selecionada,
//criando os modelos com schemas desejados
requireDir("./src/models");

//Define um roteador de rotas para rota principal /api
app.use("/api", require("./src/routes"));

//Habilita a porta 3001 para acesso ao web server
app.listen(3001);