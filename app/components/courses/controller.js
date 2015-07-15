(function (angular) {
  'use strict';

  fastTrackApp.controller('coursesController',['$scope', '$cookies', '$cookieStore', '$window','$location', function($scope, $cookies, $cookieStore, $window, $location) {
    $scope.role = $cookieStore.get('selectedRole');
    $scope.specializations = $cookieStore.get('selectedSpecializations');
  }]);

}(window.angular));
