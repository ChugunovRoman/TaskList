'use strict';

const config = require('config');

let gulp     = require('gulp'),
    watch    = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass     = require('gulp-sass'),
    cssmin   = require('gulp-minify-css');

// Таск для сборки и оптимизации стилий
// Добавляет префиксы и сжимает css
gulp.task('style:build', () => {

    gulp.src(config.gulp.src.css)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(config.gulp.build.css));
});

// Следим за изменением файлов
gulp.task('watch', () => {
    watch(config.gulp.watch.css, (event, cb) => {
        gulp.start('style:build');
    });
});
