// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

const bookshelf = require('./bookshelf');

class Contacts extends bookshelf.Model {
  get tableName() {
    return 'contacts'
  }
  get hasTimestamps() {
    return true;
  }
  created() {
    return this.belongsTo('Users', 'created_by')
  }
}

module.exports = bookshelf.model('Contacts', Contacts)