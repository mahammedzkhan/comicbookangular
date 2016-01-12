(function() {
'use strict';

/**
 * @ngdoc singleMovieCtrl function
 * @name comicbooksApp.controller:SinglemovieCtrl
 * @description
 * # SinglemovieCtrl
 * Controller of the comicbooksApp
 */
function SingleMovieCtrl(apiService, $routeParams) {
	var vm = this;
    var id = $routeParams.id;
    vm.isLoading = true;
  		apiService.getMovie(id, function(response) { 
        	vm.singlemovie = response.data;
        	console.log(response.data);
        	vm.isLoading = false;
        	return vm.singlemovie;
         });
}

angular.module('comicbooksApp')
  .controller('SingleMovieCtrl', SingleMovieCtrl);
})();