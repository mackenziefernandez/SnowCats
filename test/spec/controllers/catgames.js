'use strict';

describe('Controller: CatgamesCtrl', function () {

  // load the controller's module
  beforeEach(module('snowCatsApp'));

  var CatgamesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatgamesCtrl = $controller('CatgamesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatgamesCtrl.awesomeThings.length).toBe(3);
  });
});
