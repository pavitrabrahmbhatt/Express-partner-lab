const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const robotController = require('./controllers/robots.js')



app.listen(3000, () => {
	console.log("robots are serving!");
});