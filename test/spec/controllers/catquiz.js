'use strict';

describe('Controller: CatquizCtrl', function () {

  // load the controller's module
  beforeEach(module('snowCats2App'));

  var CatquizCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatquizCtrl = $controller('CatquizCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatquizCtrl.awesomeThings.length).toBe(3);
  });
});
