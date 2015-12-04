'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('MovieCtrl', function ($scope, apiService, localStorageService) {
  	var movies = localStorageService.get('movies');
  	if(movies && movies.length > 0){
  		$scope.movies = JSON.parse(localStorageService.get('movies'));
  	}else{
  		apiService.getAllMovies(function(response) { 
        	$scope.movies = response.data;
            localStorageService.set('movies', JSON.stringify(response.data));
         });
  		}
    
  });
