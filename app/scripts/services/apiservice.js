'use strict';

/**
 * @ngdoc service
 * @name comicbooksApp.apiService
 * @description
 * # apiService
 * Service in the comicbooksApp.
 */
angular.module('comicbooksApp')
  .service('apiService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var apikey = '?api_key=72545f1eff02ef47cb67ea2e27284a19924805d4';
    var args = '&json_callback=JSON_CALLBACK&format=jsonp';

    this.getAllSeries = function(callback){

    return $http({
		  method: 'JSONP',
		  url: 'http://www.comicvine.com/api/series_list' + apikey + args,
		  responseType: 'jsonp'
		}).then(callback);
    };

    this.getSerie = function(id, callback){
      
    return $http({
      method: 'JSONP',
      url: 'http://www.comicvine.com/api/series/'+ id  + apikey + args,
      responseType: 'jsonp'
    }).then(callback);
    };

    this.getAllMovies = function(callback){
    return $http({
      method: 'JSONP',
      url: 'http://www.comicvine.com/api/movies' + apikey + args,
      responseType: 'jsonp'
    }).then(callback);
    };

    this.getMovie = function(id, callback){
      
    return $http({
      method: 'JSONP',
      url: 'http://www.comicvine.com/api/movie/'+ id  + apikey + args,
      responseType: 'jsonp'
    }).then(callback);
    };

    this.getAllCharacters = function(callback){
    return $http({
      method: 'JSONP',
      url: 'http://www.comicvine.com/api/characters' + apikey + args,
      responseType: 'jsonp'
    }).then(callback);
    };
  });
