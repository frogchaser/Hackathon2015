'use strict';

fastTrackApp.controller('buildingController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.buildings = buildingList;

	$scope.goFloor = function(name, address) {
		$cookieStore.put('selectedBuildingName', name);
		$cookieStore.put('selectedBuildingAddress', address);
		$location.url('floor');
	};
}]);


var buildingList = [
	{
		name:'Midtown I',
		address: '675 W Peachtree St NW, Atlanta, GA 30308'
	},
	{
		name:'Midtown II',
		address: '725 W Peachtree St NE, Atlanta, GA 30308'
	},
	{
		name: 'Alpharetta',
		address: '500 North Point Pkwy, Alpharetta, GA 30022'
	},
	{
		name: 'Dallas',
		address: '208 S Akard St, Dallas, TX 75202'
	},
	{
		name: 'St. Louis',
		address: '909 Chestnut St, St. Louis, MO 63101'
	},
	{
		name: 'Middletown',
		address: '200 S Laurel Ave, Middletown, NJ 07748'
	}
];
