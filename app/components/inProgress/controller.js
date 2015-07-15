(function (angular) {
	'use strict';

	fastTrackApp.controller('inProgressController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
		$scope.inProgress = progressList;

		$scope.goFloor = function(name, description) {
			$cookieStore.put('selectedBookmarkName', name);
			$cookieStore.put('selectedBookmarkDescription', description);
			$location.url('details');
		};
	}]);


	var progressList = [
		{
			name:'Advanced Operating Systems',
			description: 'This module explores advanced topics in computer operating systems with a special emphasis on distributed computing, and the services provided by distributed operating systems.'
		},
		{
			name:'Computer Networking',
			description: 'This video looks at telecommunications network which allows computers to exchange data. In computer networks, networked computing devices pass data to each other.'
		},
		{
			name: 'Computational Photography',
			description: 'This module looks at digital image capture and processing techniques that use digital computation instead of optical processes.'
		}

	];

}(window.angular));
