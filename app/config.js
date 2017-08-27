'use strict';

module.exports = {
	// Настройки сервера для nodeJS
	'server': {
		'host': "localhost",
		'port': 3000,
	},

	// Настройки приложения
	'app': {
		'viewPath': `${__dirname}/../public/view`, // Папка с view'хами
		'staticPath': `${__dirname}/../public`, // папка для статических файлов
	},

	// Настройки для gulp
	'gulp': {
		// Куда складываем конечные файлы
		'build': {
			'js': `${__dirname}/../public/js`,
			'css': `${__dirname}/../public/css`,
			'img': `${__dirname}/../public/img`
		},
		// От куда берем исходные файлы
		'src': {
			'js': `${__dirname}/../public/js/*.js`,
			'css': `${__dirname}/../public/css/style.sass`,
			'img': `${__dirname}/../public/img/**/*.*`
		},
		// За какими файлами следим
		'watch': {
			'js': `${__dirname}/../public/js/*.js`,
			'css': `${__dirname}/../public/css/**/*.sass`,
			'img': `${__dirname}/../public/img/**/*.*`
		}
	}
};
