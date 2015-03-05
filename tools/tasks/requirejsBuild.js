var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
module.exports = function () {
  return gulp.src('../src/js/*')
    .pipe(amdOptimize('config'))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../dist'));
};