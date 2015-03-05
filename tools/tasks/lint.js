var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config')();
 
module.exports = function () {
  return gulp.src(config.paths.src+'/js/**/*')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};