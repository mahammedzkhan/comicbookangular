'use strict';

/**
 * @ngdoc singleSerieCtrl function
 * @name comicbooksApp.controller:SingleserieCtrl
 * @description
 * # SingleserieCtrl
 * Controller of the comicbooksApp
 */
function singleSerieCtrl(apiService, $scope, $routeParams) {
  	var id = $routeParams.id;
  	$scope.isLoading = true;
  		apiService.getSerie(id, function(response) { 
        	$scope.singleserie = response.data;
        	console.log(response.data);
        	$scope.isLoading = false;
         });
}

angular.module('comicbooksApp')
  .controller('SingleserieCtrl', singleSerieCtrl);
