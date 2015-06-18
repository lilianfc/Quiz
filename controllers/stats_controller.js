var models = require('../models/models.js')

// GET /quizes/:id
exports.show = function(req, res) {
	//models.Quiz.findAndCountAll({include: [{ model: models.Comment }]}).then(
	models.Quiz.findAll({include: [{ model: models.Comment }]}).then(
		function(stats) {
			var totalcomments = 0; qcomments = 0; qnocomments = 0;
			for (i in stats) {
				if (stats[i].Comments.length > 0) {
					//for (var j=0; j<stats[i].Comments.length; j++) { stats[i].Comments[j]
					for (j in stats[i].Comments) {
						totalcomments++;
					}
					qcomments++;
				} else {
					qnocomments++;
				}
			}

			res.render('statistics/stats', { 
				totalcomments: totalcomments,
				qcomments: qcomments,
				qnocomments: qnocomments,
				avg: totalcomments/stats.length,
				length: stats.length,
				errors: []
			});
		}
	).catch(function(error) { next(error)});
};