import cors from "cors";
import express from "express";

import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

import DbConnection from './configs/dbConnection.js';
import * as productsSrv from "./services/productServices.js";

const schema = buildSchema(`
  type Product {
    prodId: Int
    name: String
    color: String
    price: Float
  }
 
  input ProductInput {
    prodId: Int
    name: String
    color: String
    price: Float
  }

  type returnedValue {
    success: Boolean
    data: String
  }

  type Query {
    allProducts: [Product]
    productById(id: Int): Product
    productsFromPrice(price: Int): [Product]
  }

  type Mutation {
    addProduct(product: ProductInput): returnedValue
    updateProduct(id: Int, product: ProductInput): returnedValue
    deleteProduct(id: Int): returnedValue
    updateProductPrice(id: Int, price: Int): returnedValue
    deleteProductByColor(color: String): returnedValue
  }
`);

const root = {
  allProducts: productsSrv.getAllProducts,
  productById: productsSrv.getProductById,
  productsFromPrice: productsSrv.getProductsExpensiveFrom,
  addProduct: productsSrv.addProduct,
  updateProduct: productsSrv.updateProduct,
  deleteProduct: productsSrv.deleteProduct,
  updateProductPrice: productsSrv.updatePrice,
  deleteProductByColor: productsSrv.deleteProductsByColor
};

const app = express();
const PORT = 3001;

DbConnection();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphql: true,
  })
);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
