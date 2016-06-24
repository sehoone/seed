/**
 * 
 */

var app = angular.module('cookieDemo', ['ngCookies']);

app.controller("mainCtrl",['$scope', '$cookies', function($scope,$cookies){
							//alert("  ff "+$cookies.get("test"));
                            $scope.value=$cookies.get("test")||"없음";
							//$scope.value="gg";
							$scope.getValue=function(){
								$scope.value=$cookies.get("test");
							};
							$scope.putValue=function(iV){
								$cookies.put("test",iV);
							};
							}]);

/*
var myApp = angular.module('cookieDemo', ['ngCookies']);

myApp.controller('mainCtrl', ['$scope','$cookies','$cookieStore','$window', function($scope,$cookies,$cookieStore,$window) {
  $cookies.userName = 'Sandeep';
  $scope.platformCookie = $cookies.userName;
  $cookieStore.put('fruit','Apple');
  $cookieStore.put('flower','Rose');
  $scope.myFruit= $cookieStore.get('fruit');
}]);
*/