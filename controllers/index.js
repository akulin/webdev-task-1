'use strict';

const { categories } = require('../content/categories');

exports.index = function (req, res) {
    res.render('index', {
        categories
    });
};