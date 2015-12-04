'use strict';

describe('Controller: SinglemovieCtrl', function () {

  // load the controller's module
  beforeEach(module('comicbooksApp'));

  var SinglemovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglemovieCtrl = $controller('SinglemovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SinglemovieCtrl.awesomeThings.length).toBe(3);
  });
});
