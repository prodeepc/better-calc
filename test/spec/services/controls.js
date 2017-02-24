'use strict';

describe('Service: controls', function () {

  // load the service's module
  beforeEach(module('betterCalcApp'));

  // instantiate service
  var controls;
  beforeEach(inject(function (_controls_) {
    controls = _controls_;
  }));

  it('should do something', function () {
    expect(!!controls).toBe(true);
  });

});
