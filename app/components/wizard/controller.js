(function (angular) {
  'use strict';

  fastTrackApp.controller('wizardController',['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location) {
    $scope.step = 'Refine2';
    $scope.roles = ['Business Analyst', 'Software Engineer', 'Sleeper', 'Couch Potato'];
    $scope.specializations = ['Big Data', 'Cloud', 'Mobile First'];
    $scope.rolesSelected = {};
    $scope.specsSelected = {};
    $scope.courseSelected = {};

    $scope.courseData = [
      {'Name':'Programming 101', 'Description':'This is where you learn how to program like never before'},
      {'Name': 'Clouding 101', 'Description': 'Fly to the sky so very hi'},
      {'Name': 'Dancing 101', 'Description':  'Everybody dance now!'}
    ];


    $scope.goToWelcome = function () {
      $scope.step = 'Welcome';
    }

    $scope.goToSpecialization = function () {
      $scope.step = 'Specialization';
    };

    $scope.goToRole = function () {
      $scope.step = 'Role';
    };

    $scope.goToRefine = function () {
      $scope.step = 'Refine';
    };

    $scope.goToRefine2 = function () {
      $scope.step = 'Refine2';
    };

    $scope.goToCourses = function(name, address) {
      var selectedSpecializations = [],
          selectedRoles = [];

       angular.forEach($scope.rolesSelected, function (value, key) {
        if (value) {
          selectedRoles.push(key);
        }
      });

      angular.forEach($scope.specsSelected, function (value, key) {
        if (value) {
          selectedSpecializations.push(key);
        }
      });

      $cookieStore.put('selectedRoles', selectedRoles);
      $cookieStore.put('selectedSpecializations', selectedSpecializations);
      $location.url('courses');
    };

    $scope.courseSelect = function (course, selected) {
      $scope.courseSelected[course] = selected;
    };


  }]);

}(window.angular));
