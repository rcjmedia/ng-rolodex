const router = require('express').Router();
const users = require('./routes/users/users');
const auth = require('./routes/users/auth')
const contacts = require('./routes/contacts/contacts');

router.use('/', users, auth);
router.use('/contacts', contacts);

module.exports = router;