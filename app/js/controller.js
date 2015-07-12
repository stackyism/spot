'use strict';

var spot = angular.module("spot",[]);
spot.controller('spotCtrl',['$scope', '$http', function($scope, $http){
	$http.get('data/tables.json').success(function(response){
		$scope.tables = response;

	});
	$scope.team = "team";
	$scope.des = "des";
	$scope.formData = {};
	$scope.showmenu = false;
	$scope.popover = {
	  "title": "<form><label style='float:left;'><input type='radio' ng-model='select' value='team'>Team</label><label style='float:right;'><input type='radio' ng-model='select' value=job>Job</label><br style='clear:both;'></form>",
	  "content": "<div style='width:260px'><div style='float:left;'ng-show='select==team'><form><ul><li><span><input type='radio' ng-model='team' value='Mobile Dev'>Mobile Dev</span></li><li><span><input type='radio' ng-model='team' value='Web Dev'>Web Dev</span></li><li><span><input type='radio' ng-model='team' value='IT'>IT</span></li><li><span><input type='radio' ng-model='team' value='HR'>HR</span></li><li><span><input type='radio' ng-model='team' value='Marketing'>Marketing</span></li><li><span><input type='radio' ng-model='team' value='Products'>Product</span></li><li><span><input type='radio' ng-model='team' value='Alone'>Alone</span></li></ul></form></div><div style='float:right;' ng-show='select==job'><form><ul><li><span><input type='radio' ng-model='job' value='Developer'>Developer</span></li><li><span><input type='radio' ng-model='job' value='Sr. Developer'>Sr Developer</span></li><li><span><input type='radio' ng-model='job' value='Manager'>Manager</span></li><li><span><input type='radio' ng-model='job' value='CEO'>CEO</span></li><li><span><input type='radio' ng-model='job' value='CTO'>CTO</span></li></ul></form></div><br style='clear:both;'/></div>"
	};
	$scope.seat = {
		"s1" : "<div style='height: 150px; width: 150px; padding: 1%;'><div style='height: 50px; padding: 1%;'><div style='float: left; padding: 1%;'><img style='width: 40px; height: 40px;' src='images/{{x.seat1.emp}}.jpg'/></div><div style='float: right;'><span style='font-size: 90%;'>{{x.seat1.emp}}</span></br><span><b>{{x.seat1.des}}</b></span></div><br style='clear: both;'/></div><div style='padding: 1%;'><span style='font-size: 70%;color: grey;'>Team</span></br><span>{{x.seat1.team}}</span></div><div style='padding: 1%;'><span style='font-size: 70%;color: grey;'>Current Project</span></br><span>{{x.proj}}</span></div></div>",
	};
}]);
spot.filter('custFilter', function(){
	return function(text, input){
		if(text==input){
			return 'try';
		}
		else return 'no-change';
	}
});