const express = require("express");
const app = express();
const port = 3000;

const productsRouter = require('./routers/productsRoutes');
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
