(function() {
'use strict';

/**
 * @ngdoc singleSerieCtrl function
 * @name comicbooksApp.controller:SingleserieCtrl
 * @description
 * # SingleserieCtrl
 * Controller of the comicbooksApp
 */
function SingleSerieCtrl(apiService, $routeParams) {
	var vm = this;
  	var id = $routeParams.id;
  	vm.isLoading = true;
  		apiService.getSerie(id, function(response) { 
        	vm.singleserie = response.data;
        	console.log(response.data);
        	vm.isLoading = false;
        	return vm.singleserie;
         });
}

angular.module('comicbooksApp')
  .controller('SingleSerieCtrl', SingleSerieCtrl);
})();