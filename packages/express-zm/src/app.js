const express = require('express');
const cors = require('cors');


//import routes
const productRoutes = require('./entities/product/product.routes')
const userRoutes = require('./entities/user/user.routes')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
  }));



app.use(productRoutes);
app.use(userRoutes);

module.exports = app;