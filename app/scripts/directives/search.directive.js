'use strict';

/**
 * @ngdoc directive
 * @name comicbooksApp.directive:search
 * @description
 * # search
 */
function searchFunction() {
    return {
      templateUrl: 'views/search.view.html',
      restrict: 'E'
    };
 }
angular.module('comicbooksApp')
  .directive('search', searchFunction);
