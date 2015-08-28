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

app.controller('PostsController', function ($scope, $http) {
  $scope.getPosts = function () {
    $scope.posts;
    $http.get('/api/posts').then(function (posts) {
      console.log(posts);
      $scope.posts = posts;
    })
  }
})
