'use strict';

angular.module('myApp.directives').directive('checkbox', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<label class="checkbox"><input type="checkbox" class="custom-checkbox" />' 
                + '<span class="icons"><span class="icon-unchecked"/><span class="icon-checked"/></span>' 
                + '<span ng-transclude/></label>',

        link: function(scope, element, attr) {
            attr.$observe('name', function(value) {
                element.find('input').attr('name', value);
            });
            attr.$observe('checked', function(value) {
                element.find('input').attr('checked', value);
            });
            attr.$observe('disabled', function(value) {
                element.find('input').attr('disabled', value);
            });
        }
    }
});

angular.module('myApp.directives').directive('radio', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<label class="radio"><input type="radio" class="custom-radio">' 
                + '<span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"/></span>' 
                + '<span ng-transclude/></label>',

        link: function(scope, element, attr) {
            attr.$observe('name', function(value) {
                element.find('input').attr('name', value);
            });
            attr.$observe('checked', function(value) {
                element.find('input').attr('checked', value);
            });
            attr.$observe('disabled', function(value) {
                element.find('input').attr('disabled', value);
            });
        }
    }
});


angular.module('myApp.directives').directive('dropdown', function($parse, $compile) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        template: '<div class="cs-select" tabindex="0"><span class="cs-placeholder">Choose your option</span>' 
                + '<div class="cs-options"><ul></ul></div>' 
                + '<select class="cs-select"></select></div>',
        scope: {
            ngModel : '=',
        },

        link: function(scope, element, attr) {

            var options = $compile(scope.ngModel)(scope);
            var select = element.find('select');

            attr.$observe('class', function(value) {
                element.addClass(value);
                element.find('select').addClass(value);
            });

            // Open / Close dropdown
            function toggleSelect(){
                element.toggleClass('cs-active'); 
            }

            function refreshOptions(){
                var index = 0;
                select.html('');

                angular.forEach(options, function(e, k) {
                    options[k].index = index++;
                    options[k].selected = false;
                    select.append(angular.element('<option value="' + e.value + '">' + e.text + '</option>'));
                });
            }

            function selectOption(elem){

                element.find('li').removeClass('cs-selected');

                // Set the class as selected
                var option = angular.element(elem);
                if (!option.hasClass('cs-selected')) option.addClass('cs-selected');

                element.find('select')[0].selectedIndex = option.attr('data-index');

                // Update <select> index
                angular.forEach(element.find('option'), function(el, value){
                    if (el.index == option.attr('data-index')){
                        element.find('select')[0].selectedIndex = el.index;
                        element.find('span')[0].innerText = el.innerText;
                        el.selected = true;
                        option.prop('selected', true);
                    }
                });
                refreshOptions();
            }

            // Open / Close Dropdown
            element.bind('click', toggleSelect);
            refreshOptions();

            // Create the dropdown
            var ul = element.find('ul');
            angular.forEach(options, function(e, k){
                
                var selected = e.selected ? 'class="cs-selected"' : '';
                var liOption = angular.element('<li data-index="' + e.index + '" data-value="' + e.value + '" ' + selected + '><span>' + e.text + '</span></li>');
                
                liOption.bind('click', function(){
                    selectOption(angular.element(this));
                });

                ul.append(liOption);
            });

        }


    }
});