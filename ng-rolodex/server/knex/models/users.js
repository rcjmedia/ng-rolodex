// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

const bookshelf = require('./bookshelf');
require('./contacts');

class Users extends bookshelf.Model{
  get tableName(){
    return 'users'
  }

  get hasTimestamps(){
    return true;
  }

  created(){
    return this.hasMany('Contacts', 'created_by')
  }
}

module.exports = bookshelf.model('Users', Users)