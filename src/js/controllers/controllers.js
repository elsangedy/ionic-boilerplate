define(function (require) {
  'use strict';

  var angular = require('angular');

  // angular module definition
  var controllers = angular.module(

    // module name
    'app.controllers',

    // module dependencies
    []
  );

  controllers.controller('AppCtrl', require('controllers/AppCtrl'));
  controllers.controller('PlaylistsCtrl', require('controllers/PlaylistsCtrl'));
  controllers.controller('PlaylistCtrl', require('controllers/PlaylistCtrl'));

  return controllers;

});