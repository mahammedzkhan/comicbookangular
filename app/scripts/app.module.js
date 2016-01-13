(function() {
'use strict';

/**
 * @ngdoc overview
 * @name comicbooksApp
 * @description
 * # comicbooksApp
 *
 * Main module of the application.
 */
angular
  .module('comicbooksApp', [
    'ngRoute',
    'ngSanitize',
    'LocalStorageModule',
    'ngMaterial'
  ]);
})();
