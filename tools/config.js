module.exports = function () {
  'use strict';

  //----------------------------------------------------------------------------

  var paths = {

    src: '../src',
    build: '.temp',
    dist: '../dist'

  }; // @end: paths

  //----------------------------------------------------------------------------

  var frontend = {

    webserver: 1337,
    livereload: 9337 // default: 35729

  }; // @end: frontend

  //----------------------------------------------------------------------------

  return {
    paths:      paths,
    frontend:   frontend
  };

};
