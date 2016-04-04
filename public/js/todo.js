/* global angular*/
angular.module('todoApp', [])
  .controller('MyController', function ($scope, $http) {
    $scope.title = 'Login Page Wifi'
    $scope.login = function (input) {
      console.log(input.username, input.password)
    }
  })
