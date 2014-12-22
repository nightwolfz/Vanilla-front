'use strict';

angular.module('myApp.services').
  factory('HelloWorld', function ($resource, CONFIG) {
    return $resource(CONFIG.API_URL + '/HelloWorld/');
  });
