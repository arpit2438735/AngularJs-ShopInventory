"use strict";

var shopInventoryApp = angular.module('shopInventoryApp', [
   "ngRoute",
   "shopInventoryApp.controllers",
   "shopInventoryApp.services"
]);

shopInventoryApp.config(function($interpolateProvider) {
    // Use [[ ]] for binding angular expression, will prevent any
    // accidental collision from template expression.
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

shopInventoryApp.config(function($routeProvider, $locationProvider){
   $routeProvider
   .when('/', {
        templateUrl: 'app-template',
        controller: 'inventoryCtrl'
    })
    .otherwise({redirectTo:'/'});
});