const express = require('express');
const router = express.Router();

const Robots = require("../models/robots.js")


router.get('/', (req,res) => {
	console.log("hello");

	res.render('index.ejs', {
		robotsObject: Robots
	});
})




module.exports = router;