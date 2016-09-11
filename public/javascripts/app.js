var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
    $stateProvider

    // home state and nested views
        .state('home', {
            url: '/home',
            templateUrl: 'ui_home',
            controller: function ($scope) {
                $scope.message = 'Hello This is Home from Angular'
            }
        })
        .state('about',{
            url:'/about',
            templateUrl : 'ui_about',
            controller: function ($scope) {
                $scope.message = 'Hello This is About from Angular'
            }
        });

}]);


