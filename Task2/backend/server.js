require('dotenv').config();
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));

app.listen(5000, () => console.log('Server is running on port 5000'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database Connected Successfully'))
    .catch(err => console.error(err));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
}); 