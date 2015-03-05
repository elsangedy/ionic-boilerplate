define(function (require) {
  'use strict';

  var angular = require('angular');

  require('ionic');
  require('uiRouter');

  // angular module definition
  return angular.module(

    // module name
    'app',

    // module dependencies
    [
      //'ionic',
      'ui.router',

      require('./controllers/controllers').name,
      require('./filters/filters').name,
      require('./services/services').name,
      require('./directives/directives').name

    ]
  );

});
