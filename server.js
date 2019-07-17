const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const robotController = require('./controllers/robots.js')



//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/robots', robotController);



app.listen(3000, () => {
	console.log("robots are serving!");
});