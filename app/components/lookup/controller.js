'use strict';

fastTrackApp.controller('lookupController', ['$scope', '$cookies', '$cookieStore', '$window','$location','AttApiClient' function($scope, $cookies, $cookieStore, $window, $location, AttApiClient){


// Utilizes BlackFlag Speech to Text functionality to allow users to search for courses verbally
	$scope.voiceSearch = function() {
		AttApiClient.serverSpeechToText(data, success, fail);
		AttApiClient.authorizeUser(data, alreadyAuthorizedCallback, fail);
	};
}]);

// OAuth information for BlackFlag
// App Key pjmgnv1egaswe37gtfhwdyktpthpxe3w
// App Secret d8ztt5ixh0jkzpge1jhwpnrrie5pvaq4
