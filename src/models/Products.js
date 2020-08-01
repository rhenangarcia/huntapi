const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

//Cria o esquema (campos, tipos, etc) do modelo ("tabela") Product
const ProductSchema = new mongoose.Schema(
  {
    title:
    {
      type: String,
      required: true
    },
    description:
    {
      type: String,
      required: true
    },
    url:
    {
      type: String,
      required: true
    },
    createdAt:
    {
      type: Date,
      default: Date.now
    }
  });

//Adiciona o plugin de paginação ao esquema do modelo Produto
ProductSchema.plugin(mongoosePaginate);

//Cria o modelo com o schema desejado
mongoose.model("Product", ProductSchema);