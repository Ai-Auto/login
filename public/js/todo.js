/* global angular*/
angular.module('todoApp', [])
<<<<<<< HEAD
  .controller('MyController', function ($scope, $http) {
    $scope.title = 'Login Page Wifi'
    $scope.login = function (input) {
      console.log(input.username, input.password)
    }
=======
  .controller('MyController', function () {
    var app = this
    app.title = 'Login Page Wifi'
>>>>>>> 9414ef1aa9d97601ed94139f1230d03a85fc40d0
  })
