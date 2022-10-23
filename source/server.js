const http = require('http')
const path = require('path');
const express = require('express');
const expressValidator = require('express-validator');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')

const SortMiddleware = require('./middleware/SortMiddleware')

const routers = require('./resources/router/IndexRouters');
const db = require('./config/database');

db.connect();

const app = express();
const port = 3000;

const validatorOptions = {

}
//app.use (expressValidator(validatorOptions))


app.use(express.static(path.join(__dirname,'more')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))

app.use(SortMiddleware)

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a+b,
    sorttable: (field, sort) => {

      const sortType = field === sort.column ? sort.type : 'default'

      const icons = {
        default:'fa-solid fa-sort',
        asc:'fa-solid fa-arrow-up-1-9',
        desc:'fa-solid fa-arrow-up-9-1'
      }

      const types = {
        default: 'asc',
        asc: 'desc',
        desc:'asc',
      }

      const icon = icons[sort.type]
      const type = types[sort.type]

      return `<a href="?_sort&column=${field}&type=${type}">
                <i class="${icon}"></i>
              </a>
              `
    }

  }
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources','views'))

// Routers init
routers(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})