(function (angular, $) {
  'use strict';

  fastTrackApp.controller('wizardController',['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location) {
    $scope.step = 'Welcome';
    $scope.roles = ['Business Analyst', 'Software Engineer', 'Sleeper', 'Couch Potato'];
    $scope.specializations = ['Big Data', 'Cloud', 'Mobile First'];
    $scope.selected = {};
    var role = '';

    $scope.goToWelcome = function () {
      $scope.step = 'Welcome';
    }

    $scope.goToSpecialization = function (selectedRole) {
      $scope.step = 'Specialization';
      role = selectedRole;
    };

    $scope.goToRole = function () {
      $scope.step = 'Role';
    };

    $scope.goToCourses = function(name, address) {
      var selectedSpecializations = [];
      angular.forEach($scope.selected, function (value, key) {
        if (value) {
          selectedSpecializations.push(key);
        }
      });

      $cookieStore.put('selectedRole', role);
      $cookieStore.put('selectedSpecializations', selectedSpecializations);
      $location.url('courses');
    };

  }]);


  fastTrackApp.controller('ButtonsCtrl', function($scope, $q, $rootScope) {
     $scope.singleModel = 1;
     $scope.radioModel = '32GB';
     $scope.gridModel = 'right';
     $scope.toggleBtnModel = 'Yes';
     $scope.checkModel = {
        left: false,
        middle: true,
        right: false
     };
     $scope.checkModel1 = {
        U450: false,
        U300: false,
        U200: false,
        ufamily:false,
        ubasic:false
     };
     $scope.collection = ["Item 1", "Item 2"];
     $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection
     $scope.itemClicked = function($index) {
        $scope.selectedIndex = $index;
     };
     $scope.buttonClicked = function() {
        var deferred = $q.defer();
        $scope.promise = deferred.promise;
        setTimeout(function() {
           deferred.resolve("PROMISE");
           alert('PROMISE Set');
        }, 2000);
     };
     $scope.buttonClicked1 = function() {
        $rootScope.$broadcast("startSpinner");
        setTimeout(function() {
           $rootScope.$broadcast("stopSpinner");
        }, 2000);
     };
  });

}(window.angular, window.jQuery));
