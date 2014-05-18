"use strict";

angular.module("shopInventoryApp.controllers", [])

.controller("inventoryCtrl",function($scope, inventoryService){
  $scope.templateName = "";
  $scope.items = {};
  inventoryService.init();
  /** Getting the data from Inventory Service **/
  var getItem = inventoryService.getItem();
  if(getItem.then && getItem.then instanceof Function){
  	getItem.then(function(data){
      $scope.items = data;
  	});
   } else{
  	$scope.items = getItem;
   }
  $scope.templateName = 'inventory-data-list.html';
});