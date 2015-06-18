var models = require('../models/models.js')

// GET /quizes/:id
exports.show = function(req, res) {
	models.Quiz.findAndCountAll({include: [{ model: models.Comment }]}).then(
		function(stats) {
			res.render('statistics/stats', { stats: stats, errors: []});
		}
	).catch(function(error) { next(error)});

	//	res.render('quizes/show', { quiz: req.quiz, errors: []});
};