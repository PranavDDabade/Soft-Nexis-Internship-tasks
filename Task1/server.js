require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use('/products', require('./routes/productRoutes'));

app.listen(3000, () => console.log('Server is running on port 3000'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database Connected Successfully'))
    .catch(err => console.error(err));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});