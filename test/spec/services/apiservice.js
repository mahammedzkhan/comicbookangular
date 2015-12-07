'use strict';

describe('Service: apiService', function () {

  // load the service's module
  beforeEach(module('comicbooksApp'));

  // instantiate service
  var apiService;
  beforeEach(inject(function (_apiService_) {
    apiService = _apiService_;
  }));

  it('getAllSeries should return something', function () {
    console.log(apiService.getAllSeries());
    expect(apiService.getAllSeries()).not.toBe(null);
  });

});
