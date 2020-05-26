//require modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

//require the routes or controllers
const baseRouter = require('./controllers/baseController');
const productRouter = require('./controllers/productController')
const userRouter = require('./controllers/userController')

//initialize the app
const app = express();

//view engine
app.set('views', path.join(__dirname, '/views/'));
//set in views
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');

//use body-parser to receive data from forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//use the public directory for static files
app.use(express.static(path.join(__dirname, 'public')))

//set up mongoose
const URI = 'mongodb://localhost/gift'
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(connection => console.log('Successfully connected to DB'))
.catch(err => console.error(err))

//define the port
const port = process.env.PORT || 3000;

//use the routes to display the pages
app.use('/', baseRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);

app.listen(port, ()=> console.log(`Server started on port ${port}`))

