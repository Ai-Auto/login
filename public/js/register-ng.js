/* global angular alert*/
angular.module('todoApp', [])
  .controller('MyController', function ($http) {
    var app = this
    app.test = 'test'
    app.register = function (register) {
      console.log(register)
      $http.post('/api/register', register)
        .then(function success (response) {
          console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }
  })
