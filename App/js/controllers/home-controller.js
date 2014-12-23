'use strict';

angular.module('myApp.controllers').
  controller('HomeController', function ($scope, HelloWorld) {

    $scope.helloWorld = HelloWorld.get();
    $scope.modalPopup = angular.element(document.getElementById('somemodal'));

    $scope.options = [
	    {text:'Option A', value:'A'}, 
	    {text:'Option B', value:'B'}, 
	    {text:'Option C', value:'C'}
    ];
    

    $scope.sayHello = function () {
      return 'Hello from controller';
    };

    $scope.openModal = function () {
    	$scope.modalPopup.removeClass('modal-close').addClass('modal-open');
    };

    $scope.closeModal = function () {
    	$scope.modalPopup.removeClass('modal-open').addClass('modal-close');
    };

  });
