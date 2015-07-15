'use strict';

fastTrackApp.controller('detailsController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.bookmarks = bookmarksList;

	$scope.goFloor = function(name, description) {
		$cookieStore.put('selectedBookmarkName', name);
		$cookieStore.put('selectedBookmarkDescription', description);
		$location.url('details');
	};
}]);


var bookmarksList = [
	{
		name:'details',
		description: 'This module explores Big Data and its implications. Some thought leaders believe that in the future Big Data will be as fundamental to business as land, labor and capital.'
	},
];
