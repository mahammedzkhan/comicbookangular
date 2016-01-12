'use strict';

/**
 * @ngdoc movieCtrl function
 * @name comicbooksApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the comicbooksApp
 */
 function movieCtrl($scope, apiService, localStorageService) {
    var movies = localStorageService.get('movies');
    var timestampMovies = localStorageService.get('timestampMovies');
    var old = Date.now() - timestampMovies;
        $scope.isLoading = true;
    if(movies && movies.length > 0 && old >= 600){
      $scope.movies = JSON.parse(localStorageService.get('movies'));
      $scope.isLoading = false;
    }else{
      apiService.getAllMovies(function(response) { 
          $scope.movies = response.data;
            localStorageService.set('movies', JSON.stringify(response.data));
            localStorageService.set('timestampMovies', Date.now());
            $scope.isLoading = false;
         });
      }
}

angular.module('comicbooksApp')
  .controller('MovieCtrl', movieCtrl);
