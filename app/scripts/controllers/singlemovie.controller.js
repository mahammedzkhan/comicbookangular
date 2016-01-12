(function() {
'use strict';

/**
 * @ngdoc singleMovieCtrl function
 * @name comicbooksApp.controller:SinglemovieCtrl
 * @description
 * # SinglemovieCtrl
 * Controller of the comicbooksApp
 */
function SingleMovieCtrl(apiFactory, $routeParams) {
	var vm = this;
    var id = $routeParams.id;
    vm.isLoading = true;
    function getData() {
  		return apiFactory.getMovie(id, function(response) { 
        	vm.singlemovie = response.data;
        	console.log(response.data);
        	vm.isLoading = false;
        	return vm.singlemovie;
         });
    }
    getData();
}

angular.module('comicbooksApp')
  .controller('SingleMovieCtrl', SingleMovieCtrl);
})();