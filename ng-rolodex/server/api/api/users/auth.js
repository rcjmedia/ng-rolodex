const router = require('express').Router();
const UserModel = require('../../../knex/models/users');
const LevelModel = require('../../../knex/models/levels');
const AccountModel = require('../../../knex/models/accounts');

router.get('/accounts', (req, res) => {
  console.log("Server Accounts Model Is Working!")
  AccountModel
    .fetchAll({withRelated: ["user_info_id", "levels_info_id", "contacts_info_id"]})
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json("ERROR");
    })
})

router.get('/levels', (req,res)=> {
    console.log("Server Levels Model Is Working!")
    LevelModel
    .fetchAll()
    .then(items => {
      res.json(items.serialize());
    })
    .catch(err => {
      console.log(err, "ERR");
      res.json("ERROR");
    })
})

router.get('/usernames', (req, res) => {
  console.log("Server Users Model Is Working!")
   UserModel
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