const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')

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

app.use(methodOverride('_method'))

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a+b
  }
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources','views'))

// Routers init
routers(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})