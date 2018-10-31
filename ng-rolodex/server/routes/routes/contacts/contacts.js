const router = require('express').Router();
const ContactModel = require('../../../knex/models/contacts');

router.get('/', (req, res) => {
    console.log("Server Contacts Model Is Working!")
    ContactModel
      .fetchAll()
      .then(items => {
        res.json(items.serialize())
        console.log('items: ', items)
      })
      .catch(err => {
        console.log('err: ', err)
      })
  
  })

module.exports = router;