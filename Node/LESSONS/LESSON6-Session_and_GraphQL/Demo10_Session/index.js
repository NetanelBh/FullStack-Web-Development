const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 20 * 1000 }, // time remaining in milliseconds
  })
);

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You visited this page ${req.session.views} times`);
  } else {
    console.log(req.sessionID);
    req.session.views = 1;
    res.send('You visited this page for the first time');
  }
});

app.get('/user', (req, res) => {
  res.send(`
    <h1>Your views: ${req.session.views}</h1>
    <a href='/logout'>Logout</a>
  `);
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
