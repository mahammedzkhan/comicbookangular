(function() {
'use strict';

/**
 * @ngdoc characterCtrl function
 * @name comicbooksApp.controller:CharacterCtrl
 * @description
 * # CharacterCtrl
 * Controller of the comicbooksApp
 */
function CharacterCtrl(apiService, localStorageService) {
    var vm = this;
    var characters = localStorageService.get('characters');
    var timestampChars = localStorageService.get('timestampChars');
    var old = Date.now() - timestampChars;
    vm.isLoading = true;
    if( characters && characters.length > 0 && old >= 600) {
      vm.characters = JSON.parse(localStorageService.get('characters'));
      console.log('fetch it from localStorage!!');
       vm.isLoading = false;
    }else{
      console.log('api call!!');
      apiService.getAllCharacters(function(response) { 
          vm.characters = response.data;
            localStorageService.set('characters', JSON.stringify(response.data));
            localStorageService.set('timestampChars', Date.now());
             vm.isLoading = false;
             return vm.characters;
         });
      }
}

angular.module('comicbooksApp')
  .controller('CharacterCtrl', CharacterCtrl);

})();