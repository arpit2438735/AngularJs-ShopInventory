describe("Unit: Testing Controllers", function() {
      
  var $scope,$rootScope;

  beforeEach(angular.mock.module('shopInventoryApp'));
  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
  }));  
  
  it('should have a Inventory controller', function() {
    expect(shopInventoryApp.inventoryCtrl).not.toBe(null);
    expect($scope.templateName).not.toBe(null);
  });
});