//create the module and name it flexDeskApp
var fastTrackApp = angular.module('fastTrackApp', ['ngRoute','ngCookies', 'ui.bootstrap']);

fastTrackApp.config(function($routeProvider) {
		$routeProvider

			// route for the building page
			.when('/building', {
				templateUrl : 'app/components/building/building.html',
				controller  : 'buildingController'
			})
			// route for the home page
			.when('/', {
				templateUrl : 'app/components/home/home.html',
				controller  : 'homeController'
			})


			// route for the home page
			.when('/bookmarks', {
				templateUrl : 'app/components/bookmarks/bookmarks.html',
				controller  : 'bookmarksController'
			})

			.when('/details', {
				templateUrl : 'app/components/details/details.html',
				controller  : 'detailsController'
			})

			// route for the floor page
			.when('/floor', {
				templateUrl : 'app/components/floor/floor.html',
				controller  : 'floorController'
			})

			.when('/lookup', {
				templateUrl : 'app/components/lookup/lookup.html',
				controller  : 'lookupController'
			})

			// route for the section page
			.when('/section', {
				templateUrl : 'app/components/section/section.html',
				controller  : 'sectionController'
			})
			// route for the layout page
			.when('/layout', {
				templateUrl : 'app/components/layout/layout.html',
				controller  : 'layoutController'
			})

			// route for the layout page
			.when('/wizard', {
				templateUrl : 'app/components/wizard/wizard.html',
				controller  : 'wizardController'
			})

			// route for the layout page
			.when('/completed', {
				templateUrl : 'app/components/completed/completed.html',
				controller  : 'completedController'
			})

			// route for the layout page
			.when('/inProgress', {
				templateUrl : 'app/components/inProgress/inProgress.html',
				controller  : 'inProgressController'
			});
	});
