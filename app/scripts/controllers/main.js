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
  	apiService.getAllMovies(function(response) { 
              $scope.movies = response.data;
          });
     });
