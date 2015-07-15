'use strict';

fastTrackApp.controller('homeController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.home = homeList;

	$scope.goFloor = function(name, address) {
		$cookieStore.put('selectedBuildingName', name);
		$cookieStore.put('selectedBuildingAddress', address);
		$location.url('floor');
	};
}]);

var homeList = [

];
