define(function (require) {
  'use strict';

  var angular = require('angular');

  document.addEventListener('deviceready', onDeviceReady, false);

  if (typeof cordova === 'undefined') {
    angular.element(document).ready(onDeviceReady);
  }

  function onDeviceReady () {

    // start angular app
    angular.bootstrap(document, [require('./app').name]);

  }

});
