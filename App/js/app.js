'use strict';

// Declare individual modules
angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.factories', []);
angular.module('myApp.filters', []);
angular.module('myApp.services', []);

// Declare app level module + dependencies
angular
  .module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.config',
    'myApp.controllers',
    'myApp.directives',
    'myApp.factories',
    'myApp.filters',
    'myApp.services'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .when('/500', {
        templateUrl: 'views/500.html'
      })
      .otherwise({redirectTo: '/404'});

  $httpProvider.interceptors.push('HttpInterceptor');
});
