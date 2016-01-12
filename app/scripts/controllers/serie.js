(function() {
'use strict';

/**
 * @ngdoc serieCtrl function
 * @name comicbooksApp.controller:SerieCtrl
 * @description
 * # SerieCtrl
 * Controller of the comicbooksApp
 */
function SerieCtrl(apiFactory, localStorageService) {
    var vm = this;
    var series = localStorageService.get('series');
    var timestampSeries = localStorageService.get('timestampSeries');
    var old = Date.now() - timestampSeries;
    vm.isLoading = true;
    if(series && series.length > 0 && old >= 600){
      vm.series = JSON.parse(localStorageService.get('series'));
      vm.isLoading = false;
    }else{
      apiFactory.getAllSeries(function(response) { 
          vm.series = response.data;
            localStorageService.set('series', JSON.stringify(response.data));
            localStorageService.set('timestampSeries', Date.now());
            vm.isLoading = false;
          return vm.series;
         });
      }
}

angular.module('comicbooksApp')
  .controller('SerieCtrl', SerieCtrl);
})();