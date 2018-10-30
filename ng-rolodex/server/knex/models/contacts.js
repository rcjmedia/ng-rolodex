const bookshelf = require('./bookshelf');

const ContactModel = bookshelf.Model.extend({
    tableName: 'contacts_table',
    idAttribute: 'contact_id',
    hasTimestamps: true    
});

module.exports = ContactModel;