
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	models.Moments
		.find()
		.sort('location')
		.exec(renderMoments);

	function renderMoments(err, moments) {
		res.render('Moments', { 'moments': moments });
	}

};