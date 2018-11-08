const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9090;
const bp = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const routes = require('./api/index');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltedRounds = 12;
const User = require('./knex/models/users');

app.use(session({
  store: new RedisStore({url: 'redis://redis-session-store:6379', logErrors: true}),
  secret: 'codemana', // SECRET IS USED IN THE ALGORITHMS TO CREATE KEYS
  resave: false, // IF THERE IS NO CHANGE, SAVE IT BUT SET TO FALSE TO PREVENT CREATING SESSIONS
  saveUninitialized: true // 
}));

app.use(cors()); // Use this after the variable declaration
app.use(bp.json());
app.use(express.static(__dirname + '/public'))
app.use(bp.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((users, done) => {
  return done(null, {
    id: users.id,
    username: users.username
  })
})

passport.deserializeUser((users, done) => {
  new User({ id: users.id })
    .fetch()
    .then(users => {
      if (!users) {
        return done(null, false)
      } else {
        users = users.toJSON();
        return done(null, {
          id: users.id,
          username: users.username
        })
      }
    })
    .catch(err => {
      console.log('err.message', err.message);
      return done(err)
    })
})

passport.use(new LocalStrategy(function (username, password, done) {
  console.log('\nBcrypt Should Be Working!!!!!')
  return new User({ username: username }).fetch()
    .then(users => {
      if (users === null) {
        return done(null, false, { message: 'bad username or password' });
      } else {
        users = users.toJSON();
        bcrypt.compare(password, users.password)
          .then(samePassword => {
            if (samePassword) { return done(null, users); }
            else {
              return done(null, false, { message: 'bad username or password' });
            }
          })
      }
    })
    .catch(err => {
      return done(err);
    });
}));

app.post('/api/login', (req, res, next) => {
  req.body.username = req.body.username
  console.log(req.body)
  passport.authenticate('local', (err, users, info) => {
    if (err) {
      return res.json({ message: 'username or password invalid' })
    }
    req.login(users, (err) => {
      if (err) { return next(err); }
      else {
        res.json({ username: users.username })
      }
    });
  })(req, res, next);
});

app.post('/api/register', (req, res) => {
  let {
    username,
    name,
    email,
    address
  } = req.body;
  bcrypt.genSalt(saltedRounds, (err, salt) => {
    if (err) { return res.status(500); }
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      if (err) { return res.status(500); }
      return new User({
        username: username.toLowerCase(),
        password: hashedPassword,
        name,
        email,
        address
      })
        .save()
        .then((result) => {
          res.json(result.attributes.username);
        })
        .catch(err => {
          res.json({ message: 'username already exists' })
        });
    })
  })
});

app.get('/api/logout', (req, res) => {
  console.log('logging out server')
  req.logout();
  res.json({ success: true })
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})