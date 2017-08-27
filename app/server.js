'use strict';

module.exports = function(app, express) {

	const config = require('./config');
	const path = require('path');

	app.use(express.static(path.join(config.app.viewPath))); // Где лежат view'хи

	// Старт серва
	app.listen(
		config.server.port,
		config.server.host,
		() => console.log(`Server is running on ${config.server.host}:${config.server.port}`)
	);
}
