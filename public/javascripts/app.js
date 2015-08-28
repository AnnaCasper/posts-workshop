var app = angular.module('posts-workshop', ['ngRoute']);

app.controller('ApplicationController', function ($scope) {
  $scope.test = 'test';
})

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/posts.html',
    controller: 'ApplicationController'
  })
}]);
