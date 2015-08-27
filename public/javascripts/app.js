var app = angular.module('posts-workshop', ['ngRoute']);

app.controller('ApplicationController', function ($scope) {
  $scope.test = 'test';
  config(['$routeProvider', function($routeProvider, ApplicationController) {
    $routeProvider.when('/', {templateUrl: 'partials/posts.html', controller: 'ApplicationController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
})
