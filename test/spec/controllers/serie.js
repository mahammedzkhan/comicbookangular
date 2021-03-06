'use strict';

describe('Controller: SerieCtrl', function () {

  // load the controller's module
  beforeEach(module('comicbooksApp'));

  var SerieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SerieCtrl = $controller('SerieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('detect an hour in unix time', function () {
    var timeStampChars = 1449478729;
    var now = 1449479329;
    expect(now - timeStampChars).toBe(600);
  });

  it('should return a promise', function () {
    expect(scope.series).not.toBe(null);
  });
});