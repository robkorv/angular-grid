'use strict';


// Declare app level module which depends on filters, and services
var gridApp = angular.module('Grid', [
    'ngRoute',
    'gridControllers'
]);
gridApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/grid', {
            templateUrl: 'partials/grid.html',
            controller: 'GridCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/grid'
        });
    }
]);