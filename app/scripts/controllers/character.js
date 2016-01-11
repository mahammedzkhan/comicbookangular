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
    var timestampChars = localStorageService.get('timestampChars');
    var old = Date.now() - timestampChars;
    $scope.isLoading = true;
  	if( characters && characters.length > 0 && old >= 600) {
  		$scope.characters = JSON.parse(localStorageService.get('characters'));
      console.log('fetch it from localStorage!!');
       $scope.isLoading = false;
  	}else{
      console.log('api call!!');
  		apiService.getAllCharacters(function(response) { 
        	$scope.characters = response.data;
            localStorageService.set('characters', JSON.stringify(response.data));
            localStorageService.set('timestampChars', Date.now());
             $scope.isLoading = false;
         });
  		}
  });
