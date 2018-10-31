const bookshelf = require('./bookshelf');
const UserModel = require('./users.js');
const ContactModel = require('./contacts.js');
const LevelModel = require('./levels.js');

const AccountModel = bookshelf.Model.extend({
    tableName: 'accounts_table',
        user_info_id: function () {
            return this.belongsTo(UserModel, "user_id");
        },
        levels_info_id: function () {
            return this.belongsTo(LevelModel, "level_id");
        },
        contacts_info_id: function () {
            return this.belongsTo(ContactModel, "contact_id");
        },
        idAttribute: 'account_id',   
        hasTimestamps: true
});
module.exports = AccountModel;