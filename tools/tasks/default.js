var gulp = require('gulp');
var config = require('../config')();

module.exports = [
  [
    /*'lint',
    'dist'*/
    'requirejsBuild'
  ],
  function()
  {
    //gulp.watch(config.paths.src+'/js/**/*', function (evt) {
    //  gulp.run('lint', 'dist');
    //});
  }
];