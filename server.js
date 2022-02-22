const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

// connects to handlebar template; handlebar template lives in view/layouts/main.handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// establish connection to db & server, then turn it on
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});