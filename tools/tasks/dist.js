var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var config = require('../config')();
 
module.exports = function () {
  return gulp.src(config.paths.src+'/js/**/*')
    .pipe(concat('./dist'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../dist'));
};