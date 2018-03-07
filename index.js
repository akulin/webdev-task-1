'use strict';
const path = require('path');

const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');

const routes = require('./routes');
const weather = require('./middlewares/weather');

const port = 8080;

const app = express();

module.exports = app;

const viewsDir = path.join(__dirname, 'views');

const partialsDir = path.join(viewsDir, 'partials');


app.set('view engine', 'hbs');
app.set('views', viewsDir);

app.use(morgan('dev'));

app.use(weather.loader);
routes(app);
hbs.registerPartials(partialsDir, () => {
    app.listen(port, () => {
        console.info(`http://localhost:${port}/`);
    });
});


