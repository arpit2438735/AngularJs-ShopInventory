"use strict";

angular.module("shopInventoryApp.services", [])

.service('inventoryService', function(localStorage, mongoDbConnect, $q){
    
	var item, defer = $q.defer(), successData;

	this.init = function() {
       item = localStorage.get("inventory");
	}

	this.getItem = function() {
       if(!item) {
         mongoDbConnect.getShopInventory('shopinventory','inventory').
                        then(function(response){
            successData = response.data[0].data;
            defer.resolve(successData);
         });
         localStorage.save('inventory', defer.promise);               
         this.init();
         return defer.promise;
        }
       return item;
	}

})

.service('mongoDbConnect',function($http) {
    var apiKey = 'PCAagNjtOMX4y1gTjqaLtWaqSNoomJLp',
        _url = 'https://api.mongolab.com/api/1/databases/';

    this._generateUrl = function (url, method) {
        return $http({
                method: method,
                url: url,
                params : {
                    apiKey : apiKey
                }
        });
    }

    this.getShopInventory = function(database,collection) {
        var url = _url + database + "/collections/" + collection;
        return this._generateUrl(url,'GET');
    };
})

.service("localStorage",function(){
   
   /** HTML5 Local Sotrage Service
    *@param GET - item from Storage
    *@param SAVE - save item in Storage
    *@param REMOVE - remove item from Storage
    *@param clearALL - flush all items from Storage
   **/ 
   
   return {
        
        get: function (key) {
        	if(key){
        		return JSON.parse(localStorage.getItem(key));
        	}
            return localStorage.getItem('key');
        },

        save: function (key, value) {
            if (typeof value === 'object'){
                value.then(function(data){
                  localStorage.setItem(key, JSON.stringify(data));  
                });
                return;
            }
            localStorage.setItem(key, JSON.stringify(value));
        },

        remove: function (key) {
            localStorage.removeItem(key);
        },
        
        clearAll : function () {
            localStorage.clear();
        }
    };
});