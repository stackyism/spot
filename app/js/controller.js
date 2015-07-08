'use strict';

var spot = angular.module("spot",[]);
spot.controller('spotCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/tables.json').success(function(response){
		$scope.tables = response;
	});
/*spot.controller('spotCtrl',function($scope){
	$scope.tables = [
	{
		'id': 1,
		'name': 'Table 1',
		'seat' : 4,
	},
	{
		'id': 2,
		'name': 'Table 2',
		'seat' : 4,
	},
	{
		'id': 3,
		'name': 'Table 3',
		'seat' : 4,
	},
	{
		'id': 4,
		'name': 'Table 4',
		'seat' : 4,
	},
	{
		'id': 5,
		'name': 'Table 5',
		'seat' : 4,
	},
	{
		'id': 6,
		'name': 'Table 6',
		'seat' : 4,
	}];
});*/
}]);