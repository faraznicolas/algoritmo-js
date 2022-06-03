const express = require('express');
const cors = require('cors');
require('dotenv');
const config = require('./config');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/mutant', require('./routes/mutant'));


app.listen(config.port, () => {
    console.log('Corriendo servidor en puerto ', config.port);
});