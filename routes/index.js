var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

// Pagina de entrada (home)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comando con :quizId
router.param('quizId', quizController.load); // autoload :quizId

//Definicion de rutas de /quizes
router.get('/quizes', quizController.index);
router-get('/quizes?search=:search(\\d+)', quizController.search);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
//router.get('/search', quizController.search);
//router.get('/author', quizController.author);

module.exports = router;
