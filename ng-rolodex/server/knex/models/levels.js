const bookshelf = require('./bookshelf');

const LevelModel = bookshelf.Model.extend({
    tableName: 'levels_table',
    idAttribute: 'level_id',
    hasTimestamps: true    
});

module.exports = LevelModel;