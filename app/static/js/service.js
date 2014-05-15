"use strict;"

angular.module("shopInventoryApp.services", [])

.service('inventoryService', function(localStorage){
    /**FIXME need to use MONGOLAB API **/
	var item, dummyData = {
    "data": [
        {
            "brand": "Zovi",
            "category": "Garments",
            "cost": {
                "currency": "Rs",
                "value": 200
            },
            "description": "A brown top which features a panel on the center front with slight gathers under the neckline and three fourth sleeves.",
            "id": "53733bb409acce2ff660e125",
            "image": "http://outofprintclothing.com/wp-content/uploads/2012/11/IMG_3619-copy-219x219.jpg",
            "item": "Brown Top",
            "mrp": {
                "currency": "Rs",
                "value": 300
            },
            "owner": "5225f17d57fa8319738c8b07",
            "repr": "Brown Top",
            "stock": 3,
            "subcategory": "Men"
        },
        {
            "brand": "Zovi",
            "category": "Garments",
            "cost": {
                "currency": "Rs",
                "value": 200
            },
            "description": "A brown top which features a panel on the center front with slight gathers under the neckline and three fourth sleeves.",
            "id": "5345487f09acce1cb225e90d",
            "image": "http://outofprintclothing.com/wp-content/uploads/2012/11/IMG_3619-copy-219x219.jpg",
            "item": "Brown Top",
            "mrp": {
                "currency": "Rs",
                "value": 300
            },
            "owner": "5225f17d57fa8319738c8b07",
            "repr": "Brown Top",
            "stock": 1,
            "subcategory": "Men"
        }
       ]
    };

	this.init = function() {
       item = localStorage.get("inventory");
	}

	this.getItem = function() {
       if(!item) {
         localStorage.save('inventory', dummyData);
         this.init();
       }
       return item;
	}

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