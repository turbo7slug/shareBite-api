require('dotenv').config();
const express = require('express');
const { authRoutes } = require('./routes/');
const errorHandler = require('./middlewares/errorHandler');
const { PORT } = require('./config');
const connectDB = require('./utils/db');

const app = express();

app.use(express.json());

//routes
app.use('/auth', authRoutes);

// app.use(errorHandler);

connectDB();


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});