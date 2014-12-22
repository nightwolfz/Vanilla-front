'use strict';

angular.module('myApp.controllers').
  controller('HomeController', function ($scope, HelloWorld) {

    $scope.helloWorld = HelloWorld.get();

    $scope.options = [
	    {text:'Option A', value:'A'}, 
	    {text:'Option B', value:'B'}, 
	    {text:'Option C', value:'C'}
    ];

    /*setTimeout(function(){

    	[].slice.call(document.getElementsByClassName('cs-select')).forEach( function(el) {    
        new SelectFx(el);
    });

    }, 500);*/
    

    $scope.sayHello = function () {
      return 'Hello from controller';
    };
  });
