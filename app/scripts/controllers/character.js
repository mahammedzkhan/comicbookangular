'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:CharacterCtrl
 * @description
 * # CharacterCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('CharacterCtrl', function ($scope, apiService, localStorageService) {
    var characters = localStorageService.get('characters');
  	if(characters && characters.length > 0){
  		$scope.characters = JSON.parse(localStorageService.get('characters'));
  	}else{
  		apiService.getAllCharacters(function(response) { 
        	$scope.characters = response.data;
            localStorageService.set('characters', JSON.stringify(response.data));
         });
  		}
  });
