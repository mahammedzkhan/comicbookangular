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
        redirectTo: '/series'
      })
      .when('/movies', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .when('/characters', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl',
        controllerAs: 'character'
      })
      .when('/series', {
        templateUrl: 'views/serie.html',
        controller: 'SerieCtrl',
        controllerAs: 'serie'
      })
      .when('/series/:id', {
        templateUrl: 'views/singleserie.html',
        controller: 'SingleserieCtrl',
        controllerAs: 'serie'
      })
      .when('/movies/:id', {
        templateUrl: 'views/singlemovie.html',
        controller: 'SinglemovieCtrl',
        controllerAs: 'singlemovie'
      })
      .when('/characters/:id', {
        templateUrl: 'views/singlecharacter.html',
        controller: 'SinglecharacterCtrl',
        controllerAs: 'singlecharacter'
      })
      .otherwise({
        redirectTo: '/series'
      });
  });
