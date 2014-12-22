'use strict';

// Example using the 'should' assertion style
var should = chai.should;

describe('Controllers', function () {
  beforeEach(module('myApp.controllers', function ($provide) {
    var helloWorldMock = {
      get: function () {
        return { Message: 'Hello world' };
      }
    };

    module(function ($provide) {
      $provide.value('HelloWorld', helloWorldMock);
    });
  }));

  describe('HomeController', function () {
    it('should be defined', inject(function ($rootScope, $controller, HelloWorld) {
      var scope = $rootScope.$new();
      var controller = $controller('HomeController', { $scope: scope, HelloWorld: HelloWorld });

      controller.should.be.defined;
      scope.helloWorld.Message.should.equal('Hello world');

      // Sinon stub example
      var sandbox = sinon.sandbox.create();
      sandbox.stub(scope, 'sayHello', function () { return 'Hello from sinon stub'; });
      scope.sayHello().should.equal('Hello from sinon stub');
    }));
  });

  describe('AboutController', function () {
    it('should be defined', inject(function ($controller) {
      var controller = $controller('AboutController', { $scope: {} });
      controller.should.be.defined;
    }));
  });
});
