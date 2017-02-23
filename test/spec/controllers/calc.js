'use strict';

describe('Controller: CalcctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('betterCalcApp'));

  var CalcctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalcctrlCtrl = $controller('CalcctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalcctrlCtrl.awesomeThings.length).toBe(3);
  });
});
