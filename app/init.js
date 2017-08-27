'use strict';

module.exports = function(express, app) {

	const config = require('./config');
	const path = require('path');

	// Указываем где валяются статические файлы (js, css, images)
	app.use('/', express.static(path.join(config.app.staticPath)));

	// Маршрутизация
	let route = require('./route')(app);

	// Запускаем серв
	let server = require('./server')(app, express);
}
