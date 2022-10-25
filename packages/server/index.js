const express = require('express');
const app = express();
const cors = require('cors')
const products = require('./productsData.json');
const sliderProducts = require('./sliderProducts.json');

const PORT = process.env.PORT || 5000
const ORIGIN = process.env.ORIGIN_URI || `http://127.0.0.1:${PORT}`

app.use(cors({
  origin: ORIGIN,
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


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
