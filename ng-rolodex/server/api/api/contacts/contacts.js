const router = require('express').Router();
const bp = require('body-parser');
const Contacts = require('../../../knex/models/contacts');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

/* --- Begin GET method --- */
// Tested and confirmed that this is working in POSTMAN
router.get('/', (req, res) => {
    console.log("Server Contacts Model Is Working!")
    Contacts
      .fetchAll({ withRelated: ['created'] })
      .then(items => {
        res.json(items.serialize())
        console.log('items: ', items)
      })
      .catch(err => {
        console.log('err: ', err)
      })
  
  })

// GET /api/contacts/:id => GET /api/contacts
router.get('/:id', (req, res) => {

  const { id } = req.params;

  Contacts
    .where("id", id)
    .fetch()
    .then(viewcontact => {
      console.log("viewcontact", viewcontact);
      res.json(viewcontact);
    })
    .catch(err => {
      console.log('err: ', err);
    })
})
/* --- End GET method --- */

/* Begin POST method */
// Tested and confirmed that this is working in POSTMAN
router.post('/', (req, res) => {
  console.log("\nreq.body:", req.body);
  Contacts
    .forge({
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      work: req.body.work,
      home: req.body.home,
      email: req.body.email,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      github: req.body.github,
      photo: req.body.photo,
      created_by: req.body.created_by
    })
    .save()
    .then(() => {
      return Contacts
        .fetchAll()
        .then(postedcontact => {
          res.json(postedcontact.serialize());
        })
    })
    .catch(err => {
      console.log("err: ", err);
      res.json("RES.JSON ERROR");
    });
  })
  
/* --- End POST method --- */

/* --- Begin PUT method --- */
// Update/Edit
//PUT - /api/contacts/:id - update & respond w/updated contact
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    photo: req.body.photo,
    created_by: req.body.created_by
  }

  Contacts
    .where('id', id)
    .fetch()
    .then(contactupdate => {
      console.log("contactupdate: ", contactupdate);
      contactupdate.save(updatedContact);
      res.json(contactupdate);
    })
    .catch(err => {
      console.log("err: ", err);
    })
})

// Delete
// Tested and confirmed that this is working in POSTMAN
router.put('/:id', (req, res) => {

  const id = req.body.id

  Contacts
    .where({ id })
    .destroy()
    .then(contactItems => {
      res.json(contactItems.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
})
/* --- End PUT method --- */

module.exports = router;