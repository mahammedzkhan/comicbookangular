'use strict';

/**
 * @ngdoc directive
 * @name comicbooksApp.directive:search
 * @description
 * # search
 */
angular.module('comicbooksApp')
  .directive('search', function () {
    return {
      templateUrl: 'views/search.html',
      restrict: 'E'
    };
  });
