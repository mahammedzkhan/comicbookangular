'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:SinglemovieCtrl
 * @description
 * # SinglemovieCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('SinglemovieCtrl', function (apiService, $scope, $routeParams) {
    var id = $routeParams.id;
    $scope.isLoading = true;
  		apiService.getMovie(id, function(response) { 
        	$scope.singlemovie = response.data;
        	console.log(response.data);
        	$scope.isLoading = false;
         });
  });
