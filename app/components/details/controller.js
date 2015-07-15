'use strict';

fastTrackApp.controller('detailsController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.bookmarks = bookmarksList;

	$scope.goFloor = function(name, description) {
		$cookieStore.put('selectedBookmarkName', name);
		$cookieStore.put('selectedBookmarkDescription', description);
		$location.url('details');
	};
}]);
