(function() {
'use strict';

/**
 * @ngdoc movieCtrl function
 * @name comicbooksApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the comicbooksApp
 */
function MovieCtrl(apiFactory, localStorageService) {
    var vm = this;
    var movies = localStorageService.get('movies');
    var timestampMovies = localStorageService.get('timestampMovies');
    var old = Date.now() - timestampMovies;
    vm.isLoading = true;
    function getData() {
      return apiFactory.getAllMovies(function(response) { 
          vm.movies = response.data;
            localStorageService.set('movies', JSON.stringify(response.data));
            localStorageService.set('timestampMovies', Date.now());
            vm.isLoading = false;
            return vm.movies;
         });
    }
    
    if(movies && movies.length > 0 && old >= 600){
      vm.movies = JSON.parse(localStorageService.get('movies'));
      vm.isLoading = false;
    }else{
        getData();
      }
}

angular.module('comicbooksApp')
  .controller('MovieCtrl', MovieCtrl);
})();