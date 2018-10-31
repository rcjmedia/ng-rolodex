const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9090;
const bp = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const routes = require('./routes/index');

app.use(session({
  store: new RedisStore({url: 'redis://redis-session-store:6379', logErrors: true}),
  secret: 'codemana', // SECRET IS USED IN THE ALGORITHMS TO CREATE KEYS
  resave: false, // IF THERE IS NO CHANGE, SAVE IT BUT SET TO FALSE TO PREVENT CREATING SESSIONS
  saveUninitialized: true // 
}));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use('/routes', routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})