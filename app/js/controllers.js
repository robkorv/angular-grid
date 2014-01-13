'use strict';

/* Controllers */

var gridApp = angular.module('gridControllers', []);

gridApp.controller('GridCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('json/grid.json').success(function(data) {
            $scope.gridItems = data;
        });
        $scope.orderProp = 'id';

        $scope.showModal = function() {
            $('#myModal').modal('show');
        };
    }
]);