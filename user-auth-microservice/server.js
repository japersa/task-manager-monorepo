const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');


dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes go here
app.use('/api/v1/auth', authRoutes);
3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));