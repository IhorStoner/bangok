const express = require('express');
const app = express();
const cors = require('cors')
const products = require('./productsData.json');
const sliderProducts = require('./sliderProducts.json');

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))

app.use(express.static('ui'));

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/sliderProducts', (req, res) => {
  res.send(sliderProducts)
})

app.get('/products/:id', (req, res) => {
  const id = +req.params.id
  const product = products.find(product => product.id === id);
  res.send(product);
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})