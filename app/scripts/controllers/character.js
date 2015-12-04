'use strict';

/**
 * @ngdoc function
 * @name comicbooksApp.controller:CharacterCtrl
 * @description
 * # CharacterCtrl
 * Controller of the comicbooksApp
 */
angular.module('comicbooksApp')
  .controller('CharacterCtrl', function ($scope, apiService) {
    apiService.getAllCharacters(function(response) { 
              $scope.characters = response.data;
          });
  });
