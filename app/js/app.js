'use strict';


// Declare app level module which depends on filters, and services
angular.module('Grid', [
  'ngRoute',
  'Grid.filters',
  'Grid.services',
  'Grid.directives',
  'Grid.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grid', {templateUrl: 'partials/grid.html', controller: 'GridCtrl'});
  $routeProvider.otherwise({redirectTo: '/grid'});
}]);
