var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    
	$scope.addToCartItems = [];
	$scope.totalPrice = 0;
	$scope.Items = [{
	"id":1,
  "itemName":"Banana",
  "imgSrc":"https://tinyurl.com/zcdrymz",
  "price": 1.25,
  "quantityRemaining":10
},{
"id":2,
  "itemName":"Apple",
  "imgSrc":"https://tinyurl.com/lg5rj5z",
  "price": 2.50,
  "quantityRemaining":5
},{
"id":3,
  "itemName":"Raspberry",
  "imgSrc":"https://tinyurl.com/mhoedwl",
  "price":4.00,
  "quantityRemaining":2
},{
"id":4,
  "itemName":"Kiwi",
  "imgSrc":"https://tinyurl.com/mdm9kho",
  "price":3.33,
  "quantityRemaining":15
},{
"id":5,
  "itemName":"Pineapple",
  "imgSrc":"https://tinyurl.com/k2oq2to",
  "price":4.75,
  "quantityRemaining":1
},{
"id":6,
  "itemName":"Strawberries",
  "imgSrc":"https://tinyurl.com/nyy33hf",
  "price":2.05,
  "quantityRemaining":3
}];
$scope.addCartIndex = [];
$scope.addToCart = function(item){
	var itemObj = {};specificItemIndex = $scope.addCartIndex.indexOf(item.id);
			itemObj.itemName = item.itemName;
			itemObj.id = item.id;
			itemObj.imgSrc = item.imgSrc;
			itemObj.price = item.price;
			itemObj.quantityRemaining = item.quantityRemaining;
			
	if(specificItemIndex === -1){
			$scope.addCartIndex.push(item.id);
			itemObj.noOfReqItems = 1;
			$scope.addToCartItems.push(itemObj);
			$scope.totalPrice = $scope.totalPrice + item.price;
	}else if($scope.addToCartItems[specificItemIndex].noOfReqItems < $scope.addToCartItems[specificItemIndex].quantityRemaining){
			$scope.addToCartItems[specificItemIndex].noOfReqItems =  $scope.addToCartItems[specificItemIndex].noOfReqItems + 1;
			$scope.totalPrice = $scope.totalPrice + ($scope.addToCartItems[specificItemIndex].price);
	}
	
}

$scope.operatingItems = function(item,operator){
var operatorItemIndex = $scope.addCartIndex.indexOf(item.id);
	switch (operator) {
    case "increment":
        if($scope.addToCartItems[operatorItemIndex].noOfReqItems < $scope.addToCartItems[operatorItemIndex].quantityRemaining){

        	$scope.addToCartItems[operatorItemIndex].noOfReqItems =  $scope.addToCartItems[operatorItemIndex].noOfReqItems + 1;
			$scope.totalPrice =	$scope.totalPrice + ($scope.addToCartItems[operatorItemIndex].price);
		}
        	
        break;
    case "decrement":
        if($scope.addToCartItems[operatorItemIndex].noOfReqItems > 1){

        	$scope.addToCartItems[operatorItemIndex].noOfReqItems =  $scope.addToCartItems[operatorItemIndex].noOfReqItems - 1;
			$scope.totalPrice =	$scope.totalPrice - ($scope.addToCartItems[operatorItemIndex].price);
		}
        		
        break;
	
}

}
$scope.emptyCart=function(item){
	$scope.addCartIndex = [];
	$scope.addToCartItems = [];
	$scope.totalPrice = 0;
}
$scope.deleteItem = function(item){
var deleteItemIndex = $scope.addCartIndex.indexOf(item.id);
	$scope.totalPrice = $scope.totalPrice - ($scope.addToCartItems[deleteItemIndex].noOfReqItems * $scope.addToCartItems[deleteItemIndex].price);
	$scope.addToCartItems.splice(deleteItemIndex, 1);
	$scope.addCartIndex.splice(deleteItemIndex,1);
	
	if($scope.addToCartItems.length === 0){
		$scope.totalPrice = 0;
	}
	
}
    
});