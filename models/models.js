var path = require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite
var sequelize = new Sequelize(null, null, null,
					{ dialect: "sqlite",
					  storage: "quiz.sqlite"}
					  );

//Importar definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz; //exportar definicion tabla Quiz

//sequelize.sync() crea e inicializa tabla preguntas
sequelize.sync().success(function() {
	//success(..) ejecuta manejador una vez creada la tabla
	Quiz.count().success(function(count) {
		if (count === 0) {  //se inicializa tabla si está vacia
			Quiz.create({ pregunta: 'Capital de Italia',
						  respuesta: 'Roma'
						})
			.success(function() {
				console.log('Base de datos inicializada')
			});
		};
	});
});