const express = require('express');
const app = express();
const port = 8001;

const productRouter = require('./routers/productRouter');
app.use('/products', productRouter);

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});