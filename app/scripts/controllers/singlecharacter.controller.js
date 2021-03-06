(function() {
'use strict';

/**
 * @ngdoc singleCharacterCtrl function
 * @name comicbooksApp.controller:SinglecharacterCtrl
 * @description
 * # SinglecharacterCtrl
 * Controller of the comicbooksApp
 */
function SingleCharacterCtrl($routeParams, apiFactory) {
	var vm = this;
    var id = $routeParams.id;
    vm.isLoading = true;
    function getData() {
  	   return apiFactory.getCharacter(id, function(response) { 
        	vm.singlecharacter = response.data;
        	console.log(response.data);
        	vm.isLoading = false;
        	return vm.singlecharacter;
         });
    }
    getData();
 }

angular.module('comicbooksApp')
  .controller('SingleCharacterCtrl', SingleCharacterCtrl);
})();