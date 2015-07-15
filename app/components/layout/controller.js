'use strict';

fastTrackApp.controller('layoutController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location) {
	$scope.section = $cookieStore.get('selectedSection');
	$scope.floor = $cookieStore.get('selectedFloor');
	$scope.building = $cookieStore.get('selectedBuildingName');

	if($scope.building == 'Midtown I' && $scope.floor == '16th Floor'){
		//$scope.sections = sectionListATLSixteen;
	}

}]);
