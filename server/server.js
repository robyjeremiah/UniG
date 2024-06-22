import express from "express";
import mongoose from 'mongoose';

import cors from "cors";


const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:5050/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
// Example routes
app.get('/', (req, res) => {
    res.send('E-commerce API');
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});