const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const routers = require('./resources/router/IndexRouters');
const db = require('./config/database');

db.connect();

const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname,'more')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources','views'))

// Routers init
routers(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})