(function (angular) {
  'use strict';

  fastTrackApp.controller('wizardController',['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location) {
    $scope.step = 'Welcome';
    $scope.roles = ['Business Analyst', 'Software Engineer', 'Sleeper', 'Couch Potato'];
    $scope.specializations = ['Big Data', 'Cloud', 'Mobile First'];
    $scope.rolesSelected = {};
    $scope.specsSelected = {};
    $scope.courseSelected = {};
    $scope.maxCoursesShown = 3;

    $scope.courseData = [
      {'Name':'Programming 101', 'Description':'This is where you learn how to program like never before'},
      {'Name': 'Clouding 101', 'Description': 'Fly to the sky so very hi'},
      {'Name': 'Dancing 101', 'Description':  'Everybody dance now!'},
      {'Name': 'Taylor Swift', 'Description':  'Bad Blood'},
      {'Name': 'iPhone', 'Description':  'My world'},
      {'Name': 'Peanut Butter', 'Description':  'Jelly Time'}
    ];

    $scope.coursesShown = $scope.courseData;


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
      $location.url('/');
    };

    $scope.courseSelect = function (course, selected) {
      $scope.courseSelected[course] = selected;
    };

    $scope.skip = function () {
      var courses = [];

      for (var i=0; i< $scope.coursesShown.length; i+=1) {
        var index = $scope.coursesShown[i].Name;
        if ($scope.courseSelected[index] == null) {
          courses.push( $scope.coursesShown[i]);
        }
      }
      
      $scope.coursesShown = courses;
      if ($scope.coursesShown.length == 0) {
        $scope.goToCourses();
      }
    };


  }]);

}(window.angular));
