const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();




//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const robotController = require('./controllers/robotController.js')
app.use('/robots', robotController);



app.listen(3000, () => {
	console.log("robots are serving!");
});