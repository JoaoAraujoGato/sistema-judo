require("dotenv").config();

const express = require('express');
const { errors } = require('celebrate');

const cors = require('cors');

const routes = require('./routes/routes');

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})