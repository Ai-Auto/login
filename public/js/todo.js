/* global angular moment */
angular.module('todoApp', [])
  .controller('MyController', function ($http, $interval) {
    var app = this
    app.title = 'Login Page Wifi'
    $interval(function () {
      app.time = moment(new Date()).format('LTS')
    }, 10)
    app.login = function (input) {
      console.log(input.username, input.password)
    // save(input)
    }
  })
