const router = require('express').Router();
const users = require('./api/users/users');
// const profile = require('./api/profile/profile')
// const auth = require('./api/users/auth')
const contacts = require('./api/contacts/contacts');

router.use('/users', users);
// router.use('/profile', profile);
router.use('/contacts', contacts);

module.exports = router;