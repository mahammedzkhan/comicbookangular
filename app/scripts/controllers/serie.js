'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:SerieCtrl
 * @description
 * # SerieCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('SerieCtrl', function ($scope, apiService, localStorageService) {
    var series = localStorageService.get('series');
  	if(series && series.length > 0){
  		$scope.series = JSON.parse(localStorageService.get('series'));
  	}else{
  		apiService.getAllSeries(function(response) { 
        	$scope.series = response.data;
            localStorageService.set('series', JSON.stringify(response.data));
         });
  		}
  });
