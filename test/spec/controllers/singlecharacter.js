'use strict';

describe('Controller: SinglecharacterCtrl', function () {

  // load the controller's module
  beforeEach(module('comicbooksApp'));

  var SinglecharacterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglecharacterCtrl = $controller('SinglecharacterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SinglecharacterCtrl.awesomeThings.length).toBe(3);
  });
});
