'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('MovieCtrl', function ($scope, apiService) {
  	apiService.getAllMovies(function(response) { 
              $scope.movies = response.data;
          });
    
  });
