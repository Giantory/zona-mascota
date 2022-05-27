const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");


const PORT = 3001;
const app = express();

mongoose.connect(`mongodb+srv://gespinoa:sa123456@api-rest.m28peac.mongodb.net/?retryWrites=true&w=majority`);
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});