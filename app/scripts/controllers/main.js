'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('MainCtrl', function ($scope, apiService) {
  	apiService.getAllSeries(function(response) { 
              $scope.series = response.data;
          });
     });
