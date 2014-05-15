"use strict";

angular.module("shopInventoryApp.controllers", [])

.controller("inventoryCtrl",function($scope, inventoryService){
  $scope.templateName = "";
  $scope.items = {};
  inventoryService.init();
  /** Getting the data from Inventory Service **/
  $scope.items = inventoryService.getItem().data;
  $scope.templateName = 'inventory-data-list.html';
});