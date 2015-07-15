'use strict';

fastTrackApp.controller('sectionController', ['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location){
	$scope.sections = [];
	$scope.floor = $cookieStore.get('selectedFloor');
	$scope.building = $cookieStore.get('selectedBuildingName');

	if ($scope.building == 'Midtown I' && $scope.floor == '16th Floor') {
		$scope.sections = sectionListATLSixteen;
	}

	$scope.goLayout = function(section){
		$cookieStore.put('selectedSection', section);
		$location.url("layout");
	};

	$scope.floor16Sections = $scope.sections[0];

	$('#action-btn').click(function() {
	  $(this).toggleClass('btn-danger');
		$('#action-btn span').toggleClass('glyphicon-remove');
	});

	$('#favorite-btn').click(function() {
	  $('#favorite-btn span').toggleClass('favorited');
	});
}]);

var sectionListATLSixteen = [
	{
		name: 'Overview',
		value: 'Overview',
		img: './assets/img/floor16map.jpg'
	},
	{
		name: 'A-B',
		value: 'Section A-B',
		img: './assets/img/section.png'
	},
	{
		name: 'C-D',
		value: 'Section C-D',
		img: './assets/img/section.png'
	},
	{
		name: 'E-F',
		value: 'Section E-F',
		img: './assets/img/section.png'
	},
	{
		name: 'H-I',
		value: 'Section H-I',
		img: './assets/img/section.png'
	},
	{
		name: 'P-Q',
		value: 'Section P-Q',
		img: './assets/img/section.png'
	},
	{
		name: 'R-S',
		value: 'Section R-S',
		img: './assets/img/section.png'
	},
	{
		name: 'S-T',
		value: 'ST',
		img: './assets/img/section.png'
	}
];
