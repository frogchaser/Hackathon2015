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

    $scope.courseData = courseData;
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

var courseData =[
  {
    Name:'Big Data: The Information Transformation',
    Description: 'This module explores Big Data and its implications. Some thought leaders believe that in the future Big Data will be as fundamental to business as land, labor and capital.'
  },
  {
    Name:'Mobile First: Overview to IT',
    Description: 'This video provides an introduction to Mobile First including what it means, why is it important and how it will be implemented in IT at AT&T. The video also introduces the technology plan and our move to HTML5, CSS3 and Responsive Web Design (RWD).'
  },
  {
    Name: 'VMware Cloud Fundamentals',
    Description: 'The VMware Cloud Fundamentals course will provide you with a fundamental understanding of VMware’s Cloud products, including the business challenges those products are intended to solve.'
  },

  {
    Name: 'Big Data: As a Service',
    Description: 'This course describes the Big Data Platform-as-a-Service.'
  },

  {
    Name: 'Mobile Security for App Development',
    Description: 'This course provides an introduction to security requirements for mobile applications.'
  }
];
