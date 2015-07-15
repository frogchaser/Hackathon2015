(function (angular) {
	'use strict';

	fastTrackApp.controller('completedController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
		$scope.completed = completedList;

		$scope.goFloor = function(name, description) {
			$cookieStore.put('selectedBookmarkName', name);
			$cookieStore.put('selectedBookmarkDescription', description);
			$location.url('details');
		};
	}]);


	var completedList = [
		{
			name:'Computer Vision',
			description: 'This module explores methods for acquiring, processing, analyzing, and understanding images and, in general, high-dimensional data from the real world in order to produce numerical or symbolic information.'
		},
		{
			name:'High-Performance Computing',
			description: 'This video provides an introduction to high-level computational capacity. Performance of a supercomputer is measured in floating point operations.'
		}

	];

}(window.angular));
