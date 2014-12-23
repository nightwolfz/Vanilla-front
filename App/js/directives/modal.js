'use strict';

angular.module('myApp.directives').directive('modal', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div class="modal">'
				+ '		<div class="modal-overlay"></div>'
				+ '		<div class="modal-content" ng-transclude></div>'
				+ '</div>',

        link: function(scope, element, attr) {
            attr.$observe('id', function(value) {
                element.attr('id', value);
            });
        }
    }
});