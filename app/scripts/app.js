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
        controllerAs: 'movieVm'
      })
      .when('/characters', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl',
        controllerAs: 'characterVm'
      })
      .when('/series', {
        templateUrl: 'views/serie.html',
        controller: 'SerieCtrl',
        controllerAs: 'serieVm'
      })
      .when('/series/:id', {
        templateUrl: 'views/singleserie.html',
        controller: 'SingleSerieCtrl',
        controllerAs: 'singleSerieVm'
      })
      .when('/movies/:id', {
        templateUrl: 'views/singlemovie.html',
        controller: 'SingleMovieCtrl',
        controllerAs: 'singleMovieVm'
      })
      .when('/characters/:id', {
        templateUrl: 'views/singlecharacter.html',
        controller: 'SingleCharacterCtrl',
        controllerAs: 'singleCharacterVm'
      })
      .otherwise({
        redirectTo: '/series'
      });
  });
})();
