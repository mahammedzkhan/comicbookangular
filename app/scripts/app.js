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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, $httpProvider, localStorageServiceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    localStorageServiceProvider.setPrefix('comicbooksApp');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movie', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .when('/character', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
