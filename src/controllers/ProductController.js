const mongoose = require("mongoose");

//Acessa modelo Product
const Product = mongoose.model("Product");

//Exporta objeto com métodos a serem utilizadas por outros arquivos
module.exports =
  {
    //Busca registros no modelo Product de forma assíncrona
    async indexAsync(req, res)
    {
      //Desestrutura a query URL enviada, armazenando a constante page
      const { page = 1 } = req.query;

      //Lista os registros armazenados no modelo Product usando paginação
      //para limitar a quantidade de dados retornada
      const products = await Product.paginate(null, { page, limit: 10 });
      
      //Retorna lista de registros no formato json
      return res.json(products);
    },

    //Exibe registro selecionado pelo id no modelo Product de forma assíncrona
    async showAsync(req, res)
    {
      const product = await Product.findById(req.params.id);

      //Retorna resgistro selecionado pelo id no formato json
      return res.json(product);
    },

    //Cria registro no modelo Product com dados enviados de forma assíncrona
    async createAsync(req, res)
    {
      const product = await Product.create(req.body);

      //Retorna registro criado no formato json
      return res.json(product);
    },

    //Atualiza registro selecionado pelo id com conteúdo passado
    //em JSON no modelo Product de forma assíncrona
    async updateAsync(req, res)
    {
      //{ new: true } -> retorna o registro com novo conteúdo
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

      //Retorna resgistro selecionado pelo id com conteúdo atualizado no formato json
      return res.json(product);
    },

    //Deleta registro selecionado pelo id no modelo Product de forma assíncrona
    async destroyAsync(req, res)
    {
      await Product.findByIdAndRemove(req.params.id);

      //Retorna status HTTP 200, indicando que execução com sucesso
      return res.send();
    }
  }