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
			name:'Big Data: The Information Transformation',
			description: 'This module explores Big Data and its implications. Some thought leaders believe that in the future Big Data will be as fundamental to business as land, labor and capital.'
		},
		{
			name:'Mobile First: Overview to IT',
			description: 'This video provides an introduction to Mobile First including what it means, why is it important and how it will be implemented in IT at AT&T. The video also introduces the technology plan and our move to HTML5, CSS3 and Responsive Web Design (RWD).'
		},
		{
			name: 'VMware Cloud Fundamentals',
			description: 'The VMware Cloud Fundamentals course will provide you with a fundamental understanding of VMware’s Cloud products, including the business challenges those products are intended to solve.'
		}

	];

}(window.angular));
