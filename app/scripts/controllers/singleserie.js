'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:SingleserieCtrl
 * @description
 * # SingleserieCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('SingleserieCtrl', function (apiService, $scope, $routeParams) {
  	var id = $routeParams.id;

  		apiService.getSerie(id, function(response) { 
        	$scope.singleserie = response.data;
        	console.log(response.data);
         });
  });
