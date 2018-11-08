// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

const knex = require('../knex');
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;