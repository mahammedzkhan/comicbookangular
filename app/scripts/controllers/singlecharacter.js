'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:SinglecharacterCtrl
 * @description
 * # SinglecharacterCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('SinglecharacterCtrl', function ($routeParams, apiService, $scope) {
    var id = $routeParams.id;
    $scope.isLoading = true;
  		apiService.getCharacter(id, function(response) { 
        	$scope.singlecharacter = response.data;
        	console.log(response.data);
        	$scope.isLoading = false;
         });
  });
