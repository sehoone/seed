/**
 * 
 */
//어플리케이션에 ngBookmark 이라는 angular module을 생성한다. 
var app = angular.module('ngBookmark', []);


/*
 * "bookmarkListCtrl" 이름의 컨트롤러 함수를 등록
 * controller(컨트롤러명,배열 or 함수)
*/

app.controller("bookmarkListCtrl",['$scope',function($scope){
	//배열 초기화
	$scope.bookmarkList=[
	                     {id:'google', name:'구글', url:'www.google.co.kr'},
	                     {id:'naver', name:'네이버', url:'www.naver.com'},
	                     {id:'daum', name:'다음', url:'www.daum.net'}
	                     ];
	                    
}]);


