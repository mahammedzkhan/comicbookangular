(function() {
'use strict';

angular
	.module('comicbooksApp')
	.config(function ($routeProvider, $httpProvider, localStorageServiceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    localStorageServiceProvider.setPrefix('comicbooksApp');
    $routeProvider
      .when('/', {
        redirectTo: '/series'
      })
      .when('/movies', {
        templateUrl: 'views/movie.view.html',
        controller: 'MovieCtrl',
        controllerAs: 'movieVm'
      })
      .when('/characters', {
        templateUrl: 'views/character.view.html',
        controller: 'CharacterCtrl',
        controllerAs: 'characterVm'
      })
      .when('/series', {
        templateUrl: 'views/serie.view.html',
        controller: 'SerieCtrl',
        controllerAs: 'serieVm'
      })
      .when('/series/:id', {
        templateUrl: 'views/singleserie.view.html',
        controller: 'SingleSerieCtrl',
        controllerAs: 'singleSerieVm'
      })
      .when('/movies/:id', {
        templateUrl: 'views/singlemovie.view.html',
        controller: 'SingleMovieCtrl',
        controllerAs: 'singleMovieVm'
      })
      .when('/characters/:id', {
        templateUrl: 'views/singlecharacter.view.html',
        controller: 'SingleCharacterCtrl',
        controllerAs: 'singleCharacterVm'
      })
      .otherwise({
        redirectTo: '/series'
      });
  });
})();