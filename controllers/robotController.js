const express = require('express');
const router = express.Router();

const Robots = require("../models/robots.js")



router.get('/:id', (req,res) => {
	res.render('show.ejs', {
		robotsObject: Robots[req.params.id]
	});
})


router.get('/', (req,res) => {
	res.render('index.ejs', {
		robotsObject: Robots
	});
})


router.get('/:id/edit', (req,res) => {
	res.render('edit.ejs', {
		robotsObject: Robots[req.params.id],
		id: req.params.id 
	});
})

router.put('/:id', (req,res) => {
	console.log(req.body, "in put route");
	Robots[req.params.id] = req.body
	res.redirect('/robots')
})


router.delete('/:id', (req,res) => {
	console.log("delete route");
	Robots.splice(req.params.id,1);
	res.redirect('/robots');
})


module.exports = router;