'use strict';

/**
 * @ngdoc singleCharacterCtrl function
 * @name comicbooksApp.controller:SinglecharacterCtrl
 * @description
 * # SinglecharacterCtrl
 * Controller of the comicbooksApp
 */
function singleCharacterCtrl($routeParams, apiService, $scope) {
    var id = $routeParams.id;
    $scope.isLoading = true;
  		apiService.getCharacter(id, function(response) { 
        	$scope.singlecharacter = response.data;
        	console.log(response.data);
        	$scope.isLoading = false;
         });
 }

angular.module('comicbooksApp')
  .controller('SinglecharacterCtrl', singleCharacterCtrl);
