(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
      var toBuyList = this;

      toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

      toBuyList.buyItem = function(itemIndex) {
          ShoppingListCheckOffService.buyItem(itemIndex);
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBougthList = this;

      alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
      var service = this;
      var toBuyItems = [
          { name: "mangoes", quantity: 10 },
          { name: "apple", quantity: 2 },
          { name: "bananas", quantity: 6 },
          { name: "orange", quantity: 4 },
          { name: "watermelon", quantity: 7 }
      ];
      var alreadyBoughtItems = [];

      service.buyItem = function(itemIndex) {
          var item = toBuyItems[itemIndex];

          alreadyBoughtItems.push(item);
          toBuyItems.splice(itemIndex, 1);
      };

      service.getToBuyItems = function() {
          return toBuyItems;
      };

      service.getAlreadyBoughtItems = function() {
          return alreadyBoughtItems;
      };
  }
})();