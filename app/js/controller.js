'use strict';

var spot = angular.module("spot",[]);
spot.controller('spotCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/tables.json').success(function(response){
		$scope.tables = response;
	});
}]);
spot.filter('custFilter', function(){
	return function(text, input){
		if(text==input){
			return 'try';
		}
		else return 'no-change';
	}
});