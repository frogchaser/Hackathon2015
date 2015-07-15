'use strict';

fastTrackApp.controller('floorController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.floors = [];
	$scope.building = $cookieStore.get('selectedBuildingName');
	$scope.address = $cookieStore.get('selectedBuildingAddress');

	if($scope.building == 'Midtown I'){
		$scope.floors = floorListATL;
	}

	$scope.goSection = function(floor) {
		$cookieStore.put('selectedFloor', floor);
		$location.url('section');
	};
}]);

var floorListATL = [
	{
		name: '8th Floor',
	},
	{
		name: '9th Floor',
	},
	{
		name: '10th Floor',
	},
	{
		name: '11th Floor',
	},
	{
		name: '16th Floor',
	},
	{
		name: '17th Floor',
	},
	{
		name: '19th Floor',
	}
];
