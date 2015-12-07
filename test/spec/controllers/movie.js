'use strict';

describe('Controller: MovieCtrl', function () {

  // load the controller's module
  beforeEach(module('comicbooksApp'));

  var MovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('detect an hour in unix time', function () {
    var timeStampMovie = 1449478729;
    var now = 1449479329;
    expect(now - timeStampMovie).toBe(600);
  });

  it('should return a promise', function () {
    expect(scope.movies).not.toBe(null);
  });
});