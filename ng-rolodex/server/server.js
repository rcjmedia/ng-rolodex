const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9090;
const bp = require('body-parser');
const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

const UserModel = require('./knex/models/users.js');
const LevelModel = require('./knex/models/levels.js');
const ContactModel = require('./knex/models/contacts.js');
const AccountModel = require('./knex/models/accounts.js');

// app.use(session({
//   store: new RedisStore({url: 'redis://redis-session-store:6379', logErrors: true}),
//   secret: 'lollerkates', // SECRET IS USED IN THE ALGORITHMS TO CREATE KEYS
//   resave: false, // IF THERE IS NO CHANGE, SAVE IT BUT SET TO FALSE TO PREVENT CREATING SESSIONS
//   saveUninitialized: true // 
// }));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

/* GET methods */

app.get('/', (req,res)=> {
  res.send('Hello World!');
})

app.get('/accounts', (req, res) => {
  console.log("Server Accounts Is Working!")
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

app.get('/levels', (req,res)=> {
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
  
app.get('/contacts', (req, res) => {
  
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

app.get('/usernames', (req, res) => {

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
/* End GET methods */

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})